import axios from 'axios';
import { API_URL } from './api-url';

async function registerUser(name: string, email: string, password: string){

	try {
		const response = await axios.post(`${API_URL}/users/create-register`, {
			name, email, password 
		})
		;
		sessionStorage.setItem('email', response.data.user.email);
		sessionStorage.setItem('name', response.data.user.name);
		sessionStorage.setItem('password', response.data.user.password);

		window.location.href = '/home';
	} catch (err) {
		console.log(`Algo deu errado: ${err}`)
	}


}

export { registerUser }