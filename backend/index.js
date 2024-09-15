//All our dependencies that we installed earlier
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

//Initialize the express app
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

//Set the MongoDB connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('MongoDB connected'))
	.catch((err) => console.error(err));
	
console.log("dirName"+__dirname);


//Boot up the server and tell it to run on the specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const memberRoutes = require('./routes/members')
const eventRoutes = require('./routes/events'); 
const attendanceRoutes = require('./routes/attendance'); 

app.use('/members', memberRoutes); 
app.use('/events', eventRoutes); 
app.use('/attendance', attendanceRoutes);

const origin = path.join(__dirname, "..");
app.get('/', (req, res) => {
	const indexPath = path.join(origin, "frontend/views/index.html");
	res.sendFile(indexPath);
});

//we need this to serve static files 
app.use(express.static(path.join(__dirname,'public')));