const axios = require('axios');

const insertMemberInvalid = async () => {
    try {
        const response = await axios.post('http://localhost:5000/members', {
            name: 'Eve',
            idNumber: 12348,
            //position: 'member'
            position: 'jo'
            //missing dept!
        });
        console.log('Invalid member inserted:', response.data);
    } catch (error) {
        console.log('Error inserting invalid member:', error.response?.data || error.message);
    }
};

insertMemberInvalid();
