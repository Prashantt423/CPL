const express = require('express');
const playerController = require('../controllers/player-controller');
const authController = require('./../controllers/auth-controllers');
const { upload, resizeImage } = require('./../utils/image-upload');

const router = express.Router();

router.post('/add', authController.isLoggedIn, upload.single('photo'), resizeImage, playerController.createPlayer);
router.put('/update/:playerID', authController.isLoggedIn, upload.single('photo'), resizeImage, playerController.updatePlayer);
router.delete('/delete/:playerID', authController.isLoggedIn, playerController.deletePlayer);
router.get('/', authController.isLoggedIn, playerController.listAllPlayers);
router.get('/:playerID', authController.isLoggedIn, playerController.getPlayerById);

module.exports = router;