const Player = require('./../models//players-model');
const { playerSchemaValidation } = require('./../validator');
const catchAsync = require('./../utils/catchAsync');
const sendResponse = require('./../utils/response');
const { upload, resizeImage } = require('./../utils/image-upload');


// Create Player
exports.createPlayer = [
    upload.single('photo'),
    resizeImage,
    catchAsync(async (req, res) => {
        const { error, value } = playerSchemaValidation.validate(req.body);
        if (error) {
            return sendResponse(res, 400, 'Validation error', error.details);
        }

        if (req.file) {
            value.photo = req.file.filename;
        }

        const player = await Player.create(value);
        return sendResponse(res, 201, 'Player created successfully', player);
    }),
];

// Update Player
exports.updatePlayer = [
    upload.single('photo'),
    resizeImage,

    catchAsync(async (req, res) => {
        const playerId = req.params.playerId;
        const { error, value } = playerSchemaValidation.validate(req.body);
        if (error) {
            return sendResponse(res, 400, 'Validation error', error.details);
        }

        const currentPlayer = await Player.findById(playerId);
        if (!currentPlayer) {
            return sendResponse(res, 404, 'Player not found');
        }

        if (req.file) {
            value.photo = req.file.filename;

            if (currentPlayer.photo) {
                const oldPhotoPath = path.join(__dirname, '../public/images/players', currentPlayer.photo);
                try {
                    await unlinkAsync(oldPhotoPath);
                    console.log('Old player photo deleted successfully');
                } catch (err) {
                    console.error('Error deleting old player photo', err);
                }
            }
        }

        const updatedPlayer = await Player.findByIdAndUpdate(playerId, value, {
            new: true,
            runValidators: true
        });

        if (!updatedPlayer) {
            return sendResponse(res, 404, 'Player not found');
        }

        return sendResponse(res, 200, 'Player updated successfully', updatedPlayer);
    })];

// Delete Player
exports.deletePlayer = catchAsync(async (req, res) => {
    const playerId = req.params.playerId;
    const player = await Player.findByIdAndDelete(playerId);

    if (!player) {
        return sendResponse(res, 404, 'Player not found');
    }
    if (player.photo) {
        const Path = path.join(__dirname, '../public/images/players', player.photo);
        try {
            await unlinkAsync(Path);
            console.log('Player image deleted successfully');
        } catch (err) {
            console.error('Error deleting player image', err);
        }
    }

    // You may need to handle the deletion of the player's photo if it exists

    return sendResponse(res, 200, 'Player deleted successfully', {});
});

// List All Players
exports.listAllPlayers = catchAsync(async (req, res) => {
    const players = await Player.find();
    return sendResponse(res, 200, 'List of all players', players);
});

// Get Player by ID
exports.getPlayerById = catchAsync(async (req, res) => {
    const playerId = req.params.playerId;
    const player = await Player.findById(playerId);

    if (!player) {
        return sendResponse(res, 404, 'Player not found');
    }

    return sendResponse(res, 200, 'Player found', player);
});
