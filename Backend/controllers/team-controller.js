const Team = require('./../models/teams-model');
const catchAsync = require('./../utils/catchAsync');
const sendResponse = require('./../utils/response');
const { teamSchemaValidation } = require('./../validator');
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const unlinkAsync = promisify(fs.unlink);
const { upload, resizeImage } = require('./../utils/image-upload');


// Create Team
exports.teamCreate = [
    upload.single('logo'),
    resizeImage,

    catchAsync((async (req, res) => {
        const { error, value } = teamSchemaValidation.validate(req.body);
        if (error) {
            return sendResponse(res, 400, 'Validation error', error.details);
        }

        if (req.file) {
            const logoData = req.file.filename;
            value.logo = logoData;
        }
        const team = await Team.create(value);
        return sendResponse(res, 201, 'Team created successfully', team);
    }))];


// Update Team
exports.updateTeam = [
    upload.single('logo'),
    resizeImage,

    catchAsync(async (req, res) => {
        const teamId = req.params.teamId;
        const { error, value } = teamSchemaValidation.validate(req.body);
        if (error) {
            return sendResponse(res, 400, 'Validation error', error.details);
        }
        const currentTeam = await Team.findById(teamId);
        if (!currentTeam) {
            return sendResponse(res, 404, 'Team not found');
        }

        const oldLogoFileName = currentTeam.logo;
        const updatedTeam = await Team.findByIdAndUpdate(teamId, value, {
            new: true,
            runValidators: true
        });
        if (!updatedTeam) {
            return sendResponse(res, 404, 'Team not found');
        }
        if (req.file) {
            updatedTeam.logo = req.file.filename;
            await updatedTeam.save();
            if (oldLogoFileName) {
                const oldLogoPath = path.join(__dirname, '../public/images/teams', oldLogoFileName);
                try {
                    await unlinkAsync(oldLogoPath);
                    console.log('Old logo deleted successfully');
                } catch (err) {
                    console.error('Error deleting old logo', err);
                }
            }
        }
        return sendResponse(res, 200, 'Team updated successfully', updatedTeam);
    })];


// Delete Team
exports.deleteTeam = catchAsync(async (req, res) => {
    const teamId = req.params.teamId;
    const team = await Team.findByIdAndDelete(teamId);

    if (!team) {
        return sendResponse(res, 404, 'Team not found');
    }

    if (team.logo) {
        const logoPath = path.join(__dirname, '../public/images/teams', team.logo);
        try {
            await unlinkAsync(logoPath);
            console.log('Team logo deleted successfully');
        } catch (err) {
            console.error('Error deleting team logo', err);
        }
    }

    return sendResponse(res, 200, 'Team deleted successfully', {});
});


// List All Teams
exports.listAllTeams = catchAsync(async (req, res) => {
    const teams = await Team.find();
    return sendResponse(res, 200, 'List of all teams', teams);
});


// Get Team by ID
exports.getTeamById = catchAsync(async (req, res) => {
    const teamId = req.params.teamId;
    const team = await Team.findById(teamId);

    if (!team) {
        return sendResponse(res, 404, 'Team not found');
    }

    return sendResponse(res, 200, 'Team found', team);
});
