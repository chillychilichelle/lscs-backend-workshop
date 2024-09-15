const express = require('express');
const router = express.Router();
const Event = require('../models/event');

// Regex-Based GET (partial match accepted)
router.get('/regex', async (req, res) => {
	try {
    	let filters = {};

    	if (req.query.name) {
            // Instruct the filter to use case-insensitive regex 
        	filters.name = { $regex: req.query.name, $options: 'i' }; 
    	}
    	if (req.query.description) {
        	filters.description = { $regex: req.query.description, $options: 'i' };
    	}

    	const events = await Event.find(filters);
    	res.json(events);
	} catch (err) {
    	res.status(500).json({ message: err.message });
	}
});

// Strict GET (exact match required)
router.get('/', async (req, res) => {
	try {
    	let filters = {};

    	if (req.query.name) {
        	filters.name = req.query.name;
    	}
    	if (req.query.description) {
        	filters.description = req.query.description; 
    	}
    	if (req.query._id) {
        	filters._id = req.query._id; 
    	}

    	const events = await Event.find(filters);
    	res.json(events);
	} catch (err) {
    	res.status(500).json({ message: err.message });
	}
});


router.post('/', async (req, res) => {
	const event = new Event({
    		name: req.body.name,
    		date: req.body.date,
    		description: req.body.description
	});
	try {
    	const newEvent = await event.save();
    		res.status(201).json(newEvent);
	} catch (err) {
    		res.status(400).json({ message: err.message });
	}
});

module.exports = router;
