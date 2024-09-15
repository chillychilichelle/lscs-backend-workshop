const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
	memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'Member', required: true },
	eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
	rating: { type: Number, min: 1, max: 5, required: true }
});

const Attendance = mongoose.model('Attendance', attendanceSchema);
module.exports = Attendance;
