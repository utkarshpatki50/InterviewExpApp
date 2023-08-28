// routes.js

const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller'); // Import your controller module

// Define routes

// Home route
router.get('/', controller.getHomePage);

// Submit experience route
router.get('/submit', (req, res) => {
    // Render your submit experience page (submit.html) here
    res.send('Submit Experience Page');
});

module.exports = router;
