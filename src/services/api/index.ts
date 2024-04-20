import axios from 'axios';

async function getAllEvents() {
	const response = await axios('http://localhost:3333/events');	
	
	return response;
}

async function login(email: string, password: string){
	const response = await axios.post('http://localhost:3333/users/login', 
		{ email, password }
	);

	if (response.data.status === 401){
		return window.location.href = '/login'
	} 

	if (response.data.status === 404){
		return window.location.href = '/login'
	} 

	sessionStorage.setItem('email', await response.data.user.email);
	sessionStorage.setItem('name', await response.data.user.name);
	sessionStorage.setItem('password', await response.data.user.password);


	return window.location.href = '/home';
}

async function registerUser(name: string, email: string, password: string){
	const response = await axios.post('http://localhost:3333/users/create-register', {
		name, email, password 
	})

	sessionStorage.setItem('email', response.data.user.email);
	sessionStorage.setItem('name', response.data.user.name);
	sessionStorage.setItem('password', response.data.user.password);

	window.location.href = '/home'
}

export { getAllEvents, login, registerUser }