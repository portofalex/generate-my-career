const express = require('express');
const checkAuth = require('../middleware/checkAuth.middleware');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/me', checkAuth, userController.getCurrentUser);
router.get('/:id/profile', checkAuth, userController.getUserProfile);
router.put('/:id/profile', checkAuth, userController.updateUserProfile);
router.put('/:id/profile/work-experiences', checkAuth, userController.updateUserWorkExperiences);
router.put('/:id/profile/highlights', checkAuth, userController.updateUserHighlights);
router.patch('/:id/credits', checkAuth, userController.updateUserCredits);

module.exports = router;