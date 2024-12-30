import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Signin from "./components/Sign1/Signin";
import SignStep2 from "./components/Sign1/SignStep2";
import Home2 from "./components/Home2/Home";
import Video from "./components/video/Video";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";

export default function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signin" element={<Signin />} />
					<Route path="/SignStep2" element={<SignStep2 />} />

					{/* Protect these routes */}
					<Route
						path="/home"
						element={
							<ProtectedRoute>
								<Home2 />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/videos"
						element={
							<ProtectedRoute>
								<Video />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}
