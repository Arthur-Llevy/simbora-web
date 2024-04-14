async function getAllEvents() {
	const events = await fetch('http://localhost:3333/events', {
		headers: {'Content-Type': 'application/json'}
	});
	const response = await events.json();

	return response;
}

export { getAllEvents }