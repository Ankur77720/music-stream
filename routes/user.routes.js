const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile } = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth.js');

// Register a new user
router.post('/register', registerUser);
router.get('/register', (req, res) => {
    res.render('register');
});

// User login
router.post('/login', loginUser);

// Get user profile (protected route)
router.get('/profile', authMiddleware, getUserProfile);

module.exports = router;