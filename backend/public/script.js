document.getElementById('searchButton').addEventListener('click', async () => {

    const idNumber = document.getElementById('idNumberInput').value;
    if (!idNumber) {
        alert('Please enter an ID number.');
        return;
    }

    try {
        const memberResponse = await fetch(`http://localhost:5000/members?idNumber=${idNumber}`);
        const member = await memberResponse.json();

        if (!member.length) {
            document.getElementById('results').innerText = 'Member not found';
            return;
        }
        const memberData = member[0];

        const attendanceResponse = await fetch(`http://localhost:5000/attendance?memberId=${memberData._id}`);
        const attendances = await attendanceResponse.json();

        let resultHTML = `<h3>${memberData.name} attended the following events:</h3>`;
        for (const attendance of attendances) {
            const eventResponse = await fetch(`http://localhost:5000/events?_id=${attendance.eventId}`);
            const event = await eventResponse.json();    
            const eventData = event[0];
            resultHTML += `<p>Event: "${eventData.name}" | Rating: ${attendance.rating}</p>`;
        }

        document.getElementById('results').innerHTML = resultHTML;
    } catch (error) {
        document.getElementById('results').innerText = 'Error fetching data: '+ (error.response?.data || error.message);
    }
});
