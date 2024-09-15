const axios = require('axios');

const insertMemberInvalid = async () => {
    try {
        const response = await axios.post('http://localhost:5000/members', {
            name: 'David',
            idNumber: 12347,
            position: 'officer', //Invalid position
            department: 'QWERTYUIOP' // Invalid department
        });
        console.log('Invalid member inserted:', response.data);
    } catch (error) {
        console.log('Error inserting invalid member:', error.response?.data || error.message);
    }
};

insertMemberInvalid();
