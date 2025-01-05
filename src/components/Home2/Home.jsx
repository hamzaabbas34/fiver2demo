import React, { useState, useEffect } from "react";
// import data from "../../data.json";
import "./home.css"; // Ensure you create and import the CSS file for styles
import { Link, useNavigate } from "react-router-dom";
import videos from "../../../src/assert/videos/videoplayback (1).mp4";
import video1 from "../../../src/assert/videos/videoplayback (3).mp4";
import video2 from "../../../src/assert/videos/videoplayback (2).mp4";
import { Icon } from "@iconify/react/dist/iconify.js";
import MovisGrid2 from "../WatchMovies/MovisGrid2.jsx";
import Navbar from "./Navbar.jsx";

const images3 = [
	video2, // Replace with your image paths
	video1,
	videos,
];

export default function Home2() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [fade, setFade] = useState(true);
	const navgate = useNavigate();
	function playMoive() {
		navgate("/videos");
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setFade(false);

			setTimeout(() => {
				setCurrentImageIndex((prevIndex) =>
					prevIndex === images3.length - 1 ? 0 : prevIndex + 1
				);
				setFade(true);
			}, 300); // This timeout should match the transition duration in CSS
		}, 10000); // Change image every 5 seconds

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		preloadImages(images3);
	}, []);

	const preloadImages = (images) => {
		images.forEach((image) => {
			const img = new Image();
			img.src = image;
		});
	};

	return (
		<div className="relative overflow-hidden bg-black">
			<Navbar/>
			<div className="image-container ">
				<div className="text-overlay">
					<div
						className={`overlay-inside font-Jost-Regular ${
							fade ? "opacity-100" : "opacity-0"
						}`}>
						<Link to="/videos" state={{ videos: images3[currentImageIndex] }}>
							<div className={`text-container   tron ${fade && " troff"}`}>
								<h1 className="text-4xl py-5 font-montserrat font-bold ">
									Sonic the Hedgehog 3
								</h1>
								<p className="font-montserrat leading-normal text-[18px]  ">
									As kids vanish throughout town, a group of outcasts must face
									their biggest fears — and a murderous, terrifying and
									seemingly invincible clown.
								</p>
								<div className="flex gap-3 pb-10 mx-auto w-full justify-center items-center">
									<button
										onClick={playMoive}
										className="font-montserrat  gap-2 flex justify-center items-center  px-4 sm:px-10 py-0 rounded-md my-5 bg-red-600 text-white">
										Play{" "}
										<span>
											<Icon icon="solar:play-bold" width="20" height="20" />
										</span>
									</button>
									<button className="font-montserrat hover:text-white  gap-2 flex justify-center items-center  px-4 sm:px-10 py-0 rounded-md my-5 bg-white text-black">
										More Info{" "}
										<span>
											<Icon
												icon="fluent:info-32-regular"
												width="20"
												height="20"
											/>
										</span>
									</button>
									<button></button>
								</div>
							</div>
						</Link>
					</div>
				</div>

				<div className="image-set m2  ">
					<video
						src={images3[currentImageIndex]} // Replace `` with your video source array
						className={`w-[100%] h-full object-cover object-right-bottom    video ${
							fade ? "fade-in" : "fade-out"
						}`}
						autoPlay // Ensure correct casing
						muted // Required for autoplay
						loop // Ensure the video loops
						playsInline // Optimizes for mobile devices
					>
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
			<div className=" flex flex-col gap-4 my-10">
				<MovisGrid2 title={"Best Seasons"} />
				
			</div>
		</div>
	);
}
