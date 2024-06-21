const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/auth/register', authController.register);
router.post('/auth/activate-account', authController.activateAccount);
router.post('/auth/login', authController.login);
router.post('/auth/forgot-password', authController.forgotPassword);
router.post('/auth/reset-password', authController.resetPassword);

router.get('/profile', authMiddleware, authController.getProfile);
router.post('/profile/change-password', authMiddleware, authController.changePassword);

module.exports = router;
