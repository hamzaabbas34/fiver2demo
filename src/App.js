import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Sign from "./components/Sign/Sign";
export default function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/sign" element={<Sign />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
