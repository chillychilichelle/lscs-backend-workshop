const axios = require('axios');

const insertMember = async () => {
    try {
        const response = await axios.post('http://localhost:5000/members', {
            name: 'Alice',
            idNumber: 12345,
            position: 'officer',
            department: 'TND'
        });
        console.log('Member inserted successfully:', response.data);
    } catch (error) {
        console.log('Error inserting member:', error.response?.data || error.message);
    }
};

insertMember();