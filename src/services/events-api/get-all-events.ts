import axios from 'axios';
import { API_URL } from './api-url';

async function getAllEvents() {
	const response = await axios(`${API_URL}/events`);	
	
	return response;
}

export { getAllEvents }