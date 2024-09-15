const express = require('express');
const router = express.Router();
const Member = require('../models/member');

router.get('/', async (req, res) => {
	try {
    	// Create an empty filter object then pump it with all possible things you would want to query based on later
    	let filters = {};
    	if (req.query.name) {
        		filters.name = req.query.name;
    	}
    	if (req.query.idNumber) {
        		filters.idNumber = req.query.idNumber;
    	}
    	if (req.query.position) {
        		filters.position = req.query.position;
    	}
    	if (req.query.department) {
        		filters.department = req.query.department;
    	}

    	//Return all members that match
    		const members = await Member.find(filters);
    		res.json(members);
	} catch (err) {
    		res.status(500).json({ message: err.message });
	}
});

//Post a new member entry
router.post('/', async (req, res) => {
	const member = new Member({
    		name: req.body.name,
    		idNumber: req.body.idNumber,
    		position: req.body.position,
    		department: req.body.department,
    		contactNumber: req.body.contactNumber
	});
	try {
    		const newMember = await member.save();
    		res.status(201).json(newMember);
	} catch (err) {
    		res.status(400).json({ message: err.message });
	}
});

module.exports = router;
