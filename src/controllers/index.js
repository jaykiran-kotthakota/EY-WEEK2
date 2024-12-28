// This file exports various controller functions that handle requests and responses for different routes in the application.

const authController = require('./authController');
const documentController = require('./documentController');

module.exports = {
    authController,
    documentController,
};