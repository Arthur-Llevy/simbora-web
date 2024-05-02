import axios from 'axios';
import { API_URL } from './api-url';

async function getUserData(email: string, password: string){
	const response = await axios.post(`${API_URL}/users/login`, {
		name, email, password 
	})

	return response.data.user;
}

export { getUserData }