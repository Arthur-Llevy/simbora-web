async function getAllEvents() {
	const events = await fetch('https://simbora-api.onrender.com/events', {
		headers: {'Content-Type': 'application/json'}
	});
	const response = await events.json();

	return response;
}

export { getAllEvents }