const axios = require('axios');

const getEventsAttendedByMember = async (idNumber) => {
    try {
        // First, fetch the member details by idNumber
        const memberResponse = await axios.get(`http://localhost:5000/members?idNumber=${idNumber}`);
        const member = memberResponse.data;
        if (!member) {
            console.log('Member not found');
            return;
        }
        const memberData = member[0];

        // Then, fetch all attendance records for that member
        const attendanceResponse = await axios.get(`http://localhost:5000/attendance?memberId=${memberData._id}`);
        const attendances = attendanceResponse.data;

        // Fetch and print out event name and ratings
        for (const attendance of attendances) {
            console.log(attendance);
            const eventResponse = await axios.get(`http://localhost:5000/events?_id=${attendance.eventId}`);
            const event = eventResponse.data;
            const eventData = event[0];
            console.log(`${memberData.name} attended "${eventData.name}" and rated it: ${attendance.rating}`);
        }

    } catch (error) {
        console.log('Error fetching events attended by member:', error.response?.data || error.message);
    }
};

getEventsAttendedByMember(101);
