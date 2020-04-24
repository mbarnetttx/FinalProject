const express = require('express');
const router = express.Router();

const controller = require('../controllers/userController');

// Middleware: /api/users/
router.post('/register', controller.createUser);

module.exports = router;