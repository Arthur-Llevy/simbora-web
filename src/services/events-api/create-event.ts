import axios from 'axios';
import { API_URL } from './api-url';

async function createEvent(name: string, localization: string, type: string, date: string, startsAt: string, endsAt: string,) {
	const response = await axios.post(`${API_URL}/events`, {
		name, 
		localization,
		type,
		date,
		startsAt,
		endsAt
	});	
	
	return response;
}

export { createEvent }