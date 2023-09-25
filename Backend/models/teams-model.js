const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    logo: String,
    bidPointBalance: {
        type: Number,
        min: 0,
    },
    mentor: String,
    captain: String,
    totalPlayer: {
        type: Number,
        min: 0,
    },
});

module.exports = mongoose.model('Team', teamSchema);
