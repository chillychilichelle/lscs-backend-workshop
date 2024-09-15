const express = require('express');
const router = express.Router();
const Attendance = require('../models/attendance');
const Member = require('../models/member');
const Event = require('../models/event');

//use object ids
router.post('/object-ids', async (req, res) => {
	try {
    	const attendance = new Attendance({
        	memberId: req.body.memberId, 
        	eventId: req.body.eventId,   
        	rating: req.body.rating
    	});

    	const savedAttendance = await attendance.save();
    	res.status(201).json(savedAttendance);
	} catch (err) {
    	res.status(400).json({ message: err.message });
	}
});

// use idNumber and eventName
router.post('/by-id-and-name', async (req, res) => {
	try {
    	// fetch the member by idNumber
    	const member = await Member.findOne({ idNumber: req.body.idNumber });
    	if (!member) {
        	return res.status(404).json({ message: 'Member not found' });
    	}

    	//fetch the event by name
    	const event = await Event.findOne({ name: req.body.eventName });
    	if (!event) {
        	return res.status(404).json({ message: 'Event not found' });
    	}
        
		console.log(member);
    	const attendance = new Attendance({
        	memberId: member._id,  
        	eventId: event._id,	
        	rating: req.body.rating
    	});

    	const savedAttendance = await attendance.save();
    	res.status(201).json(savedAttendance);
	} catch (err) {
    	res.status(400).json({ message: err.message });
	}
});

router.get('/', async (req, res) => {
	try {
    	let filters = {};

    	if (req.query.memberId) {
        	filters.memberId = req.query.memberId;
    	}
    	if (req.query.eventId) {
        	filters.eventId = req.query.eventId;
    	}
    	if (req.query.rating) {
        	filters.rating = req.query.rating;
    	}

    	const attendances = await Attendance.find(filters);
    	res.json(attendances);
	} catch (err) {
    	res.status(500).json({ message: err.message });
	}
});

module.exports = router;
