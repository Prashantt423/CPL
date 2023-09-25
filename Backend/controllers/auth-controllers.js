const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user-model');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const sendResponse = require('./../utils/response');
const dotenv = require('dotenv');
const { promisify } = require('util');
const validator = require('./../validator');


dotenv.config({ path: './config.env' });

exports.registerUser = catchAsync(async (req, res) => {

    const { error, value } = validator.userSignupSchemaValidation.validate(req.body);
    if (error) {
        return sendResponse(res, 400, 'Fail', error.details[0].message);
    }

    const hashedPassword = await bcrypt.hash(value.password, 10);
    value.password = hashedPassword;

    try {
        const user = await User.create(value);

        const token = jwt.sign({ user: user.id, role: user.role }, process.env.SECRET, { expiresIn: '1h' });

        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 60 * 60 * 1000, // Cookie expires in 1 hour
            sameSite: 'strict'
        });

        return sendResponse(res, 200, 'Success', { user, token });
    } catch (err) {
        return sendResponse(res, 500, 'Fail', err.message);
    }
});


exports.loginUser = catchAsync(async (req, res) => {

    const { error, value } = validator.userLoginSchemaValidation.validate(req.body);
    if (error) {
        return res.status(400).json({
            status: 'Fail',
            message: error.details[0].message,
        });
    }
    ;
    const user = await User.findOne({ email: value.email });

    if (!user) {
        return next(new AppError('User not found', 404));

    }
    if (user.status === 'banned') {
        return next(new AppError('User is banned and cannot log in', 401));

    }
    const isAuthenticated = await bcrypt.compare(value.password, user.password);
    if (isAuthenticated) {
        const token = jwt.sign({ user: user.id, role: user.role }, process.env.SECRET, { expiresIn: '1h' });

        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 60 * 60 * 1000, // Cookie expire in 1 hour
            sameSite: 'strict'
        });
        return sendResponse(res, 200, 'User login successfully', { token });

    } else {
        return next(new AppError('Invalid password', 401));

    }

});


exports.isLoggedIn = async (req, res, next) => {
    const token = req.cookies.token;

    if (token) {
        try {
            const decoded = await promisify(jwt.verify)(token, process.env.SECRET);
            const currentUser = await User.find({ id: decoded.user });
            if (!currentUser) {
                return next(new AppError('User not found', 404));
            }
            req.user = currentUser;
            return next();
        } catch (err) {
            return next(new AppError('Invalid token', 401));
        }
    }
    return next(new AppError('something'));
};

exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(
                new AppError('You do not have permission to perform this action', 403)
            );
        }
        next();
    };
};

// module.exports = { registerUser, loginUser, isLoggedIn, restrictTo };