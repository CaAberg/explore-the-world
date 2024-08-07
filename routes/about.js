const express = require('express');
const router = express.Router();
const aboutInfo = require('../data/aboutInfo');

router.get('/', (req, res) => {
    res.render('about', { title: 'About', info: aboutInfo });
});

module.exports = router;
