// src/routes/index.js

const express = require('express');
const authRoutes = require('./auth');
const documentRoutes = require('./documents');

const router = express.Router();

// Use authentication routes
router.use('/auth', authRoutes);

// Use document management routes
router.use('/documents', documentRoutes);

module.exports = router;