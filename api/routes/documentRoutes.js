const express = require('express');
const checkAuth = require('../middleware/checkAuth.middleware');
const documentController = require('../controllers/documentController');
const router = express.Router();

router.get('/', checkAuth, documentController.getCoverLetters);
router.get('/:id', checkAuth, documentController.getCoverLetter);
router.patch('/:id', checkAuth, documentController.updateCoverLetter);
router.post('/', checkAuth, documentController.createCoverLetter);
router.delete('/:id', checkAuth, documentController.deleteCoverLetter);

module.exports = router;