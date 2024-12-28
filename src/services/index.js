// This file contains business logic and service functions that interact with the models and controllers, exporting the necessary functions for use in the application.

const DocumentService = require('./documentService');
const AuthService = require('./authService');

module.exports = {
    DocumentService,
    AuthService,
};