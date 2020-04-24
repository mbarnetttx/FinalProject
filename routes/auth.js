const express = require('express');
const router = express.Router();
const passport = require('passport');

const controller = require('../controllers/authController');

// Middleware: /api/
router.post('/login', passport.authenticate('local'), controller.login);
router.get('/logout', controller.logout);

module.exports = router;