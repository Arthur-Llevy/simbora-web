import { API_URL } from './api-url';
import axios from 'axios';

async function getOneEvent(id: number) {
	const response = await axios.get(`${API_URL}/events/${id}`);

	sessionStorage.setItem('id', response.data.event.id);
	sessionStorage.setItem('name', response.data.event.name);
	sessionStorage.setItem('localization', response.data.event.localization);
	sessionStorage.setItem('type', response.data.event.type);
	sessionStorage.setItem('date', response.data.event.date);
	sessionStorage.setItem('startsAt', response.data.event.startsAt);
	sessionStorage.setItem('endsAt', response.data.event.endsAt);


	return response.data;
}

export { getOneEvent }