const multer = require('multer');
const sharp = require('sharp');
const AppError = require('./appError');

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        return cb(null, true);
    } else {
        return cb(new AppError('Not an image! Please upload only images.', 400), false);
    }
};

exports.upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});

exports.resizeImageTeam = (req, res, next) => {
    if (!req.file) return next();
    req.file.filename = `${Date.now()}-${Math.random()}.jpeg`;
    sharp(req.file.buffer)
        .resize(500, 500)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(`public/images/teams/${req.file.filename}`, (err) => {
            if (err) {
                console.error('Error saving file:', err);
            }
        });
    return next();
};

exports.resizeImagePlayer = (req, res, next) => {
    if (!req.file) return next();

    req.file.filename = `${Date.now()}-${Math.random()}.jpeg`;
    sharp(req.file.buffer)
        .resize(500, 500)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(`public/images/players/${req.file.filename}`, (err) => {
            if (err) {
                console.error('Error saving file:', err);
            }
        });
    return next();
};
