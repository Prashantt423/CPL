const express = require('express');
const teamController = require('../controllers/team-controller');
const authController = require('./../controllers/auth-controllers');
const { upload, resizeImageTeam } = require('./../utils/image-upload');

const router = express.Router();
router.post('/add', authController.isLoggedIn, upload.single('logo'), resizeImageTeam, teamController.teamCreate);
router.put('/update/:teamID', authController.isLoggedIn, upload.single('logo'), resizeImageTeam, teamController.updateTeam);
router.delete('/delete/:teamID', authController.isLoggedIn, teamController.deleteTeam);
router.get('/', authController.isLoggedIn, teamController.listAllTeams);
router.get('/:teamID', authController.isLoggedIn, teamController.getTeamById);

module.exports = router;