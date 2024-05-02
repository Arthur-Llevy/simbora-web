import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '../pages/home/';
import { RegisterUser } from '../pages/register-user';
import { Login } from '../pages/login/';
import { InitialPage } from '../pages/initial-page/';
import { Event } from '../pages/event/';
import { Profile } from '../pages/profile/';
import { CreateEvent } from '../pages/create-event/';
import { MyEvents } from '../pages/my-events/';

export const Rts = () => {

	const name  = sessionStorage.getItem('userName')

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<InitialPage />} /> 
				<Route path="/home" element={name !== null ? <Home /> :  <Login />}/>
				<Route path="/login" element={<Login />} /> 
				<Route path="/register-user" element={<RegisterUser />} /> 
				<Route path="/events/:id" element={<Event />} /> 
				<Route path="/profile" element={name !== null ? <Profile /> :  <Login />} /> 
				<Route path="/create-event" element={name !== null ? <CreateEvent /> :  <Login />} /> 
				<Route path="/my-events" element={name !== null ? <MyEvents /> :  <Login />} /> 
			</Routes>
		</BrowserRouter>
	);
}