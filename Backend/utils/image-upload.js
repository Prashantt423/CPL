const multer = require('multer');
const sharp = require('sharp');
const AppError = require('./appError');

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb(new AppError('Not an image! Please upload only images.', 400), false);
    }
};

exports.upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});

exports.resizeImage = (req, res, next) => {
    if (!req.file) return next();

    req.file.filename = `${Date.now()}-${Math.random()}.jpeg`;

    sharp(req.file.buffer)
        .resize(500, 500)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(`public/images/${req.body.model}s/${req.file.filename}`);

    next();
};
