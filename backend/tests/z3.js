const axios = require('axios');

const getEventsByKeyword = async (keyword) => {
    try {
        const response = await axios.get(`http://localhost:5000/events/regex?name=${keyword}`);
        console.log(`Events with "${keyword}" in the name:`, response.data);
    } catch (error) {
        console.log('Error fetching events by keyword:', error.response?.data || error.message);
    }
};

getEventsByKeyword('code');
