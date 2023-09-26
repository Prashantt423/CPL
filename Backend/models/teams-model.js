const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: String,
    logo: String,
    bidPointBalance: Number,
    mentor: String,
    captain: String,
    totalPlayer: Number,
});

module.exports = mongoose.model('Team', teamSchema);