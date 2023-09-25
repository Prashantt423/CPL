const { date } = require('joi');
const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    //Personal Details
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    currentSemester: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        require: true
    },
    phoneNumber: {
        type: Number,
        require: true
    },
    branch: {
        type: String,
        require: true
    },

    // Auction
    basePrice: {
        type: Number,
        min: 0,
    },
    bidPrice: {
        type: Number,
        min: 0,
    },
    previousTeam: {
        type: String,
        required: true,
    },
    currentTeam: {
        type: String,
        required: true,
    },
    playerType: {
        type: String,
        required: true,
    },

    //Statics

    //Batsman

    battingHand: String,
    fours: {
        type: Number,
        min: 0,
    },
    sixes: {
        type: Number,
        min: 0,
    },

    //Bowler

    bowlingStyle: String,
    HighestWicket: {
        type: Number,
        min: 0,
    },
    overs: {
        type: Number,
        min: 0,
    },


    //All Rounders

    innings: {
        type: Number,
        min: 0,
    },
    totalRuns: {
        type: Number,
        min: 0,
    },
    totalWickets: {
        type: Number,
        min: 0,
    },
    average: {
        type: Number,
        min: 0,
    },
    strikeRate: {
        type: Number,
        min: 0,
    },
    economyRate: {
        type: Number,
        min: 0,
    },

});

module.exports = mongoose.model('Player', playerSchema);