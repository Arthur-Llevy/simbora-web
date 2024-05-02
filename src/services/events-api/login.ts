import axios from 'axios';
import { API_URL } from './api-url';

async function login(email: string, password: string){

	const response = await axios.post(`${API_URL}/users/login`, 
		{ email, password }
	);

	if (response.data.status === 401){
		return response
	} 

	if (response.data.status === 404){
		return response
	} 

	sessionStorage.setItem('email', await response.data.user.email);
	sessionStorage.setItem('userName', await response.data.user.name);
	sessionStorage.setItem('password', await response.data.user.password);
	sessionStorage.setItem('startsAt', await response.data.user.startsAt);
	sessionStorage.setItem('endsAt', await response.data.user.endsAt);
	sessionStorage.setItem('eventsAttended', await response.data.user.eventsAttended);
	sessionStorage.setItem('eventsCreated', await response.data.user.eventsCreated);
	sessionStorage.setItem('phone', await response.data.user.phone);

 	return window.location.href = '/home';
}

export { login }