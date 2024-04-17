import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '../pages/home/';
import { RegisterUser } from '../pages/register-user';
import { Login } from '../pages/login/';
import { InitialPage } from '../pages/initial-page/';
import { Event } from '../pages/event/';
import { Menu } from '../components/menu';

export const Rts = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<InitialPage />} /> 
				<Route path="/home" element={<Home />} /> 
				<Route path="/login" element={<Login />} /> 
				<Route path="/register-user" element={<RegisterUser />} /> 
				<Route path="/event" element={<Event />} /> 
			</Routes>
			<Menu />
		</BrowserRouter>
	);
}