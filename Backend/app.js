const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const userRouter = require('./routes/user-routes');
const teamRouter = require('./routes/team-routes');
const playerRouter = require('./routes/player-routes');

const app = express();

app.use(morgan('dev'));

// Limit requests from same API
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour!'
});

app.use('/', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.use(cookieParser());

// routes
app.use('/cpl', userRouter);
app.use('/team', teamRouter);
app.use('/player', playerRouter);

app.all('*', (req, res) => {
    res.status(404).json({
        status: 'Fail',
        message: `Can't find ${req.originalUrl} on this server!`,
    });
});


app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        status: err.status,
        message: err.message
    });
});



module.exports = app;