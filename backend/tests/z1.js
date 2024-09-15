const axios = require('axios');

const getMemberByIdNumber = async (idNumber) => {
    try {
        const response = await axios.get(`http://localhost:5000/members?idNumber=${idNumber}`);
        console.log(`Member with ID number ${idNumber}:`, response.data);
    } catch (error) {
        console.log('Error fetching member by ID number:', error.response?.data || error.message);
    }
};

getMemberByIdNumber(12345);
