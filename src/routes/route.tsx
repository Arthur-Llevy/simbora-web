import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '../pages/home/';
import { Login } from '../pages/login/';

export const Rts = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/home" element={<Home />} /> 
				<Route path="/login" element={<Login />} /> 
			</Routes>
		</BrowserRouter>
	);
}