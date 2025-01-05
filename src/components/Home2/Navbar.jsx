import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
	const [isInputExpanded, setIsInputExpanded] = useState(false);
	const [searchTerm, setSearchTerm] = useState(""); // State for search input
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();

	const handleSearch = () => {
		if (searchTerm.trim()) {
			navigate(`/search?query=${searchTerm.trim()}`);
			setSearchTerm(""); // Clear the search input after navigating
		}
	};

	const routeNames = {
		"/home": "Home",
		"/movies": "Movies",
		"/shows": "Shows",
		"/popular": "Popular",
	};
	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
		  handleSearch();
		}
	  };

	// Get the current route name or default to "Home"
	const currentRoute = routeNames[location.pathname] || "Home";

	return (
		<nav className="z-30 absolute top-0 left-0 w-full flex justify-between items-center px-4 sm:px-8 py-8 text-white">
			{/* Brand Name */}
			<div className="flex items-center gap-2  md:gap-10">
				<h1 className="sm:text-2xl text-[18px] font-bold text-gray-500 ">
					MAGHANNMOVIE
				</h1>
				<ul className="flex items-center gap-6 font-montserrat relative">
					<button
						className="lg:hidden w-auto flex items-center gap-0 justify-between  md:px-4 px-2 py-2  rounded-full border-2"
						onClick={() => setIsDropdownOpen((prev) => !prev)}>
						<span className=" text-[10px] sm:text-[16px] ">{currentRoute}</span>
						<Icon icon="ic:round-arrow-left" width="20" height="20" rotate="-90deg"  color="#fff" />
					</button>

					{/* Dropdown Menu */}

					<ul
						className={`absolute top-full left-0 bg-gray-700 rounded-md shadow-lg transition-all duration-300 ease-in-out ${
							isDropdownOpen ? "block" : "hidden"
						} md:hidden`}>
						<NavLink to={"/home"}>
							<li
								className="px-4 py-2 text-[14px] sm:text-[16px] md:text-[18px] hover:bg-gray-600"
								onClick={() => setIsDropdownOpen(false)}>
								Home
							</li>
						</NavLink>
						<NavLink to={"/movies"}>
							<li
								className="px-4 py-2 text-[14px] sm:text-[16px] md:text-[18px] hover:bg-gray-600"
								onClick={() => setIsDropdownOpen(false)}>
								Movies
							</li>
						</NavLink>
						<NavLink to={"/shows"}>
							<li
								className="px-4 py-2 text-[14px] sm:text-[16px] md:text-[18px] hover:bg-gray-600"
								onClick={() => setIsDropdownOpen(false)}>
								Shows
							</li>
						</NavLink>
						<NavLink to={"/popular"}>
							<li
								className="px-4 py-2 text-[14px] sm:text-[16px] md:text-[18px] hover:bg-gray-600"
								onClick={() => setIsDropdownOpen(false)}>
								Popular
							</li>
						</NavLink>
					</ul>

					{/* Horizontal Menu for larger screens */}
					<div className="lg:flex gap-5  hidden">
						<NavLink to={"/home"}>
							<li>Home</li>
						</NavLink>
						<NavLink to={"/movies"}>
							<li>Movies</li>
						</NavLink>
						<NavLink to={"/shows"}>
							<li>Shows</li>
						</NavLink>
						<NavLink to={"/popular"}>
							<li>Popular</li>
						</NavLink>
					</div>
				</ul>
			</div>

			{/* Search Input for larger screens */}
			<div className="relative h-fit items-center hidden md:flex">
				<input
					type="text"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					placeholder="Search here ..."
					className={`outline-none h-[50px] px-2 rounded-full border-2 bg-inherit transition-all duration-300 ease-in-out ${
						isInputExpanded ? "w-[250px]" : "w-0 opacity-0"
					}`}
				/>
				<Icon
					icon="hugeicons:search-01"
					width="30"
					height="30"
					className="absolute right-3 top-[10px] cursor-pointer"
					onClick={() => {
						setIsInputExpanded(true);
						handleSearch();
					}}
				/>
			</div>

			{/* Mobile Search Input */}
			<div
				className={`fixed md:hidden flex top-0 left-0 w-full bg-white py-5 transition-all px-8 ${
					isVisible ? "translate-y-0" : "-translate-y-24"
				}`}>
				<input
					type="text"
					placeholder="Search here ..."
					className="px-4 outline-none border-2 bg-white border-black w-full h-14 text-black font-montserrat rounded-full"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					onKeyDown={handleKeyPress}
				/>
				<button
					className="md:hidden p-2"
					onClick={() => setIsVisible((prev) => !prev)}>
					<Icon icon="charm:cross" width="40" height="40" color="#000" />
				</button>
			</div>

			{/* Hamburger Button for Mobile */}
			<button
				className="md:hidden p-2"
				
				onClick={() => {
					setIsVisible((prev) => !prev);	
				}}>
				
				<Icon icon="hugeicons:search-01" width="30" height="30" />
			</button>
		</nav>
	);
};

export default Navbar;
