const mongoose = require('mongoose');

// Define the Mongoose schema for the User model
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['active', 'banned'],
        default: 'active',
    },
    role: {
        type: String,
        enum: ['team', 'admin'],
        required: true,
    },
});

// Create a Mongoose model from the schema
module.exports = mongoose.model('User', userSchema);
