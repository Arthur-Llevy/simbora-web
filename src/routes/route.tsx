import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '../pages/home/';
import { RegisterUser } from '../pages/register-user';
import { Login } from '../pages/login/';
import { InitialPage } from '../pages/initial-page/';
import { Event } from '../pages/event/';
import { Profile } from '../pages/profile/';
import { CreateEvent } from '../pages/create-event/';
import { MyEvents } from '../pages/my-events/';


// Components
import { Menu } from '../components/menu/'; 

export const Rts = () => {

	//const name  = sessionStorage.getItem('userName')

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<InitialPage />} /> 
				<Route path="/home" element={1===1 ? <Home /> :  <Login />}/>
				<Route path="/login" element={<Login />} /> 
				<Route path="/register-user" element={<RegisterUser />} /> 
				<Route path="/events/:id" element={<Event />} /> 
				<Route path="/profile" element={1===1 ? <Profile /> :  <Login />} /> 
				<Route path="/create-event" element={1===1 ? <CreateEvent /> :  <Login />} /> 
				<Route path="/my-events" element={1===1 ? <MyEvents /> :  <Login />} /> 
			</Routes>
			<Menu />
		</BrowserRouter>
	);
}