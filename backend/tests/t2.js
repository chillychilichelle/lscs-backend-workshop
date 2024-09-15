const axios = require('axios');

const insertMemberWithExtraField = async () => {
    try {
        const response = await axios.post('http://localhost:5000/members', {
            name: 'Bob',
            idNumber: 12346,
            position: 'jo',
            department: 'RND',
            extraField: 'Unexpected field'
        });
        console.log('Member inserted with extra field:', response.data);
    } catch (error) {
        console.log('Error inserting member with extra field:', error.response?.data || error.message);
    }
};

insertMemberWithExtraField();
