// src/routes/documents.js
const express = require('express');
const router = express.Router();
const DocumentController = require('../controllers/index');

// Route to create a new document
router.post('/', DocumentController.createDocument);

// Route to get all documents
router.get('/', DocumentController.getAllDocuments);

// Route to get a specific document by ID
router.get('/:id', DocumentController.getDocumentById);

// Route to update a document by ID
router.put('/:id', DocumentController.updateDocument);

// Route to delete a document by ID
router.delete('/:id', DocumentController.deleteDocument);

module.exports = router;