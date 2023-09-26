const sendResponse = (res, statusCode, status, data) => {
    const response = {
        status,
        data,
    };
    return res.status(statusCode).json(response);
};

module.exports = sendResponse;
