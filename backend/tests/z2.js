const axios = require('axios');

const getMembersInRND = async () => {
    try {
        const response = await axios.get('http://localhost:5000/members?department=RND');
        console.log('Members in RND department:', response.data);
    } catch (error) {
        console.log('Error fetching members in RND:', error.response?.data || error.message);
    }
};

getMembersInRND();
