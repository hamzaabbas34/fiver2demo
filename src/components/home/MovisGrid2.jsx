import { useRef } from "react";
import "./home.css";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

export default function MovisGrid2({ title }) {
	const navgate = useNavigate();
	const scrollContainerRef = useRef(null);
	const [hovered, setHovered] = useState(false);
	const [showModal, setShowModal] = useState(false); // Modal visibility
	const [selectedImage, setSelectedImage] = useState(""); // Store the clicked image

	function scrollRight() {
		if (scrollContainerRef.current) {
			const containerWidth = scrollContainerRef.current.offsetWidth;
			scrollContainerRef.current.scrollBy({
				left: containerWidth * 0.2,
				behavior: "smooth",
			});
		}
	}
	function navgatefun() {
		const isLogin = localStorage.getItem("isLogin") === "true";
		isLogin && navgate("/home");
		!isLogin && navgate("/signin");
	}

	function scrollLeft() {
		if (scrollContainerRef.current) {
			const containerWidth = scrollContainerRef.current.offsetWidth;
			scrollContainerRef.current.scrollBy({
				left: -containerWidth * 0.2,
				behavior: "smooth",
			});
		}
	}

	const handleImageClick = (imageSrc) => {
		setSelectedImage(imageSrc); // Set the clicked image
		setShowModal(true); // Show the modal
	};

	return (
		<div
			className="px-8 relative bg-black bg-opacity-50  mb-20 "
			style={{ height: "400px" }}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}>
			<div className="py-5">
				<h2 className="text-2xl font-montserrat font-semibold text-white">
					{title}
				</h2>
			</div>
			<div
				ref={scrollContainerRef}
				className=" gap-3 overflow-x-scroll flex  scrollllwid">
				{hovered && (
					<>
						<div className="absolute top-1/2 left-0" onClick={scrollLeft}>
							<div className="swiper-button-prev"></div>
						</div>
						<div className="absolute top-1/2 right-5" onClick={scrollRight}>
							<div className="swiper-button-next"></div>
						</div>
					</>
				)}
				{Array.from({ length: 7 }).map((_, index) => (
					<div
						key={index}
						className="min-w-[16.6rem] bg-red-200 h-full flex items-center justify-center relative">
						<img
							src="https://i.pinimg.com/736x/d3/b5/d4/d3b5d4010500fd9b18deeda6fa9a1f8c.jpg"
							alt={`Thumbnail ${index}`} // Provide a meaningful description
							className="w-full h-full object-cover object-top cursor-pointer"
							onClick={() =>
								handleImageClick(
									"https://i.pinimg.com/736x/d3/b5/d4/d3b5d4010500fd9b18deeda6fa9a1f8c.jpg"
								)
							}
						/>
					</div>
				))}
			</div>

			{/* Modal */}
			{showModal && (
				<div className="fixed inset-0 text-white  bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-black  rounded-md shadow-md w-1/2 relative">
						<img
							src={selectedImage}
							alt="Selected"
							className="w-full mb-4 h-[400px] rounded object-cover object-top"
						/>
						<div className="flex justify-end absolute right-0 top-1">
							<button
								className="bg-inherit py-2 px-4"
								onClick={() => setShowModal(false)}>
								<Icon
									icon="bitcoin-icons:cross-outline"
									width="40"
									height="40"
								/>
							</button>
						</div>
						<div className="font-montserrat  flex text-[14px] gap-1 px-4">
							<p className=" p-2  rounded-sm bg-gray-500">16+</p>
							<p className=" p-2  rounded-sm bg-gray-500">2024 </p>
							<p className=" p-2  rounded-sm bg-gray-500">Moive</p>
							<p className=" p-2  rounded-sm bg-gray-500">Comedies</p>
						</div>
						<p className="font-montserrat text-white  px-4 py-4  ">
							On the night of their wedding, Vicky and Vidya decide to record a
							private video. But when the CD is stolen, a panicked hunt for the
							footage unfolds.
						</p>
						<button
							className="  rounded-md font-montserrat font-semibold px-6 py-4 m-4 bg-red-600"
							onClick={navgatefun}>
							Get Start →
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
