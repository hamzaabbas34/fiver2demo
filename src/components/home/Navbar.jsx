import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [language, setLanguage] = useState("English");
	const [isOpen, setIsOpen] = useState(false);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle
	const isLogin = localStorage.getItem("isLogin") === "true";
	const handleLanguageChange = (value) => {
		setLanguage(value);
		setIsOpen(false); // Close the dropdown after selection
	};

	return (
		<nav className="flex justify-between items-center px-8 py-4 bg-black text-white">
			{/* Brand Name */}
			<h1 className="text-2xl font-bold text-gray-500">MAGHANNMOVIE</h1>

			{/* Hamburger Menu */}
			<button
				className="md:hidden bg-red-500 px-4 py-2 rounded-full"
				onClick={() => setIsSidebarOpen(true)}>
				Menu
			</button>

			{/* Sidebar */}
			<div
				className={`fixed top-0 right-0 h-full bg-white text-black z-20 shadow-lg transform ${
					isSidebarOpen ? "translate-x-0" : "translate-x-full"
				} transition-transform duration-300 w-64`}>
				<button
					className="absolute top-4 right-4 text-black text-xl"
					onClick={() => setIsSidebarOpen(false)}>
					&times; {/* Close Button */}
				</button>

				<div className="flex flex-col items-start gap-4 p-4 mt-8">
					{/* Language Selection */}
					<div className="relative w-full">
						<div
							className="border bg-red-700 text-white py-2 px-4 rounded-full cursor-pointer flex justify-between items-center"
							onClick={() => setIsOpen(!isOpen)}>
							{language}
							<div
								className={`w-0 h-0 border-[6px] border-transparent   ${
									isOpen ? "border-b-white" : "border-t-white"
								}`}
								style={{
									borderColor: isOpen
										? "transparent transparent white transparent"
										: "transparent transparent transparent white",
								}}></div>
						</div>

						{isOpen && (
							<div className="absolute left-0 w-full bg-white text-black mt-1 rounded-lg shadow-lg z-10">
								<div
									className="px-4 py-2 cursor-pointer hover:bg-red-600 hover:text-white"
									onClick={() => handleLanguageChange("English")}>
									English
								</div>
								<div
									className="px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white"
									onClick={() => handleLanguageChange("French")}>
									French
								</div>
							</div>
						)}
					</div>

					{/* Sign In Button */}
					{!isLogin && (
						<Link
							to="/signin"
							className="bg-red-500 px-4 py-2 rounded-full text-white w-full text-center">
							Sign In
						</Link>
					)}
				</div>
			</div>

			{/* Desktop Menu */}
			<div className="hidden md:flex items-center gap-4">
				<div className="relative">
					<div
						className="border bg-DodgerBlue  text-white py-2 px-4 rounded-full cursor-pointer flex justify-between items-end gap-3"
						onClick={() => setIsOpen(!isOpen)}>
						{language}
						<div
							className={`w-0 h-0 border-[6px] border-transparent mb-[2px] rotate-90 ${
								isOpen ? "border-b-white" : "border-t-white"
							}`}
							style={{
								borderColor: isOpen
									? "transparent transparent white transparent rotate-45 "
									: "transparent transparent transparent white",
							}}></div>
					</div>

					{isOpen && (
						<div className="absolute left-0 w-full bg-white text-black mt-1 rounded-lg shadow-lg z-10">
							<div
								className="px-4 py-2 cursor-pointer "
								onClick={() => handleLanguageChange("English")}>
								English
							</div>
							<div
								className="px-4 py-2 cursor-pointer  "
								onClick={() => handleLanguageChange("French")}>
								French
							</div>
						</div>
					)}
				</div>

				{!isLogin && (
					<Link
						to="/signin"
						className="bg-red-500 px-4 py-2 rounded-full text-white w-full text-center">
						Sign In
					</Link>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
