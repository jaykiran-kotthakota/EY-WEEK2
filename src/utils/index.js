// This file exports utility functions that can be used throughout the application, such as validation and formatting functions.

export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US');
};

export const generateUniqueId = () => {
    return 'id-' + Math.random().toString(36).substr(2, 16);
};