

import { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import videos from "../../../src/assert/videos/videoplayback (1).mp4";
import './move.css'
export default function Movies({ title }) {
	const navigate = useNavigate();
	const scrollContainerRef = useRef(null);
	const [hovered, setHovered] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const videoRef = useRef(null);

	const scrollRight = () => {
		if (scrollContainerRef.current) {
			const containerWidth = scrollContainerRef.current.offsetWidth;
			scrollContainerRef.current.scrollBy({
				left: containerWidth * 0.2,
				behavior: "smooth",
			});
		}
	};

	const scrollLeft = () => {
		if (scrollContainerRef.current) {
			const containerWidth = scrollContainerRef.current.offsetWidth;
			scrollContainerRef.current.scrollBy({
				left: -containerWidth * 0.2,
				behavior: "smooth",
			});
		}
	};

	const handleVideoClick = () => {
		if (videoRef.current) {
			if (videoRef.current.paused) {
				videoRef.current.play();
			} else {
				videoRef.current.pause();
			}
		}
	};

	const navigateToVideos = () => {
		setShowModal(false); // Close the modal first
		setTimeout(() => {
			navigate("/videos", { state: { videos } }); // Navigate to /videos
		}, 300); // Add a small delay to allow the modal animation to finish
	};

	return (
		<div
			className="px-8 relative bg-black bg-opacity-50 -10"
			style={{ height: "auto" }}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div className="py-5">
				<h2 className="text-2xl font-montserrat font-semibold text-white">
					{title}
				</h2>
			</div>
			<div
				ref={scrollContainerRef}
				className="max-h-96 gap-3 overflow-x-scroll flex h-96 scrollllwid"
			>
				{hovered && (
					<>
						<div className="absolute top-[50%] left-0" onClick={scrollLeft}>
							<div className="swiper-button-prev"></div>
						</div>
						<div className="absolute top-[50%] right-5" onClick={scrollRight}>
							<div className="swiper-button-next"></div>
						</div>
					</>
				)}
				{Array.from({ length: 7 }).map((_, index) => (
					<div
						key={index}
						className="min-w-[16.6rem] bg-red-200 h-full flex items-center justify-center relative"
					>
						<video
							src={videos}
							className="w-full h-full object-cover object-top cursor-pointer"
							onClick={() => setShowModal(true)}
						/>
					</div>
				))}
			</div>

			{/* Modal */}
			{showModal && (
				<div className="fixed inset-0 text-white bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div
						className="bg-black rounded-md shadow-md w-full max-w-xl relative"
						style={{ height: "400px" }}
					>
						<video
							ref={videoRef}
							src={videos}
							className="w-full h-full object-cover cursor-pointer"
							autoPlay
							muted
							loop
							playsInline
							onClick={handleVideoClick}
						/>
						<div className="flex justify-end absolute right-0 top-1">
							<button
								className="bg-inherit py-2 px-4"
								onClick={() => setShowModal(false)}
							>
								<Icon icon="bitcoin-icons:cross-outline" width="40" height="40" />
							</button>
						</div>
						<div className="font-montserrat flex text-[14px] gap-1 px-4 bg-black">
							<p className="p-2 rounded-sm bg-gray-500">16+</p>
							<p className="p-2 rounded-sm bg-gray-500">2024</p>
							<p className="p-2 rounded-sm bg-gray-500">Movie</p>
							<p className="p-2 rounded-sm bg-gray-500">Comedies</p>
						</div>
						<p className="font-montserrat text-white px-4 py-4 bg-black">
							On the night of their wedding, Vicky and Vidya decide to record a
							private video. But when the CD is stolen, a panicked hunt for the
							footage unfolds.
						</p>
						<div className="bg-black">
							<button
								className="rounded-md font-montserrat font-semibold px-6 py-4 m-4 bg-white text-black"
								onClick={navigateToVideos}
							>
								play →
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
