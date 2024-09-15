const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
	name: { type: String, required: true },
	idNumber: { type: Number, required: true, unique: true },
	position: { type: String, enum: ['member', 'jo', 'officer'], required: true },
	department: { type: String, enum: ['RND', 'TND', 'DOC', 'PUB'], required: function() { return this.position !== 'member'; }},
	contactNumber: { type: Number, required: false }
});

const Member = mongoose.model('Member', memberSchema);
module.exports = Member;
