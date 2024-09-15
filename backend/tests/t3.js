const axios = require('axios');

const insertMemberMissingField = async () => {
    try {
        const response = await axios.post('http://localhost:5000/members', {
            name: 'Carol',
            position: 'officer'
            //we're missing the id number and department!!
        });
        console.log('Member inserted missing field:', response.data);
    } catch (error) {
        console.log('Error inserting member with missing field:', error.response?.data || error.message);
    }
};

insertMemberMissingField();
