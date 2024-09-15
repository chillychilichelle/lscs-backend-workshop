const axios = require('axios');
const BASE_URL = 'http://localhost:5000';

//util function, messy and just for demo purposes
const insertMembers = async () => {
    const members = [
        { name: 'Alice', idNumber: 101, position: 'member', department: 'RND', contactNumber: 11111 },
        { name: 'Bob', idNumber: 102, position: 'jo', department: 'TND' },
        { name: 'Charlie', idNumber: 103, position: 'officer', department: 'DOC', contactNumber: 33333 },
        { name: 'David', idNumber: 104, position: 'member' }, 
        { name: 'Eve', idNumber: 105, position: 'jo', department: 'PUB'}
    ];

    for (const member of members) {
        try {
            const response = await axios.post(`${BASE_URL}/members`, member);
            console.log('Inserted member:', response.data);
        } catch (error) {
            console.log('Error inserting member:', error.response?.data || error.message);
        }
    }
};

// Function to insert events
const insertEvents = async () => {
    const events = [
        { name: 'VSCode Workshop', date: '2024-01-10', description: 'Learn to use VsCode' },
        { name: 'General Assembly', date: '2024-01-20', description: 'Required.' },
        { name: 'Learn to Code with Macky', date: '2024-01-30' } 
    ];

    for (const event of events) {
        try {
            const response = await axios.post(`${BASE_URL}/events`, event);
            console.log('Inserted event:', response.data);
        } catch (error) {
            console.log('Error inserting event:', error.response?.data || error.message);
        }
    }
};

// Function to insert attendances using `/by-id-and-name` route
const insertAttendances = async () => {
    const attendances = [
        { idNumber: 101, eventName: 'VSCode Workshop', rating: 5 },
        { idNumber: 102, eventName: 'Learn to Code with Macky', rating: 4 },
        { idNumber: 103, eventName: 'General Assembly', rating: 3 },
        { idNumber: 104, eventName: 'General Assembly', rating: 2 },
        { idNumber: 105, eventName: 'Learn to Code with Macky', rating: 5 },
        { idNumber: 101, eventName: 'General Assembly', rating: 1 }
    ];

    for (const attendance of attendances) {
        try {
            const response = await axios.post(`${BASE_URL}/attendance/by-id-and-name`, attendance);
            console.log('Inserted attendance:', response.data);
        } catch (error) {
            console.log('Error inserting attendance:', error.response?.data || error.message);
        }
    }
};

const populateDatabase = async () => {
    await insertMembers();
    await insertEvents();
    await insertAttendances();
};

populateDatabase();
