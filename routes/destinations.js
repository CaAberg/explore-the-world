const express = require('express');
const router = express.Router();
const destinations = require('../data/destinations');

router.get('/', (req, res) => {
    res.render('destinations', { title: 'Destinations', destinations });
});

router.get('/:id', (req, res) => {
    const destination = destinations.find(dest => dest.id === req.params.id);
    if (destination) {
        res.render('templates/destination', { title: destination.name, destination });
    } else {
        res.status(404).send('Destination not found');
    }
});

module.exports = router;
