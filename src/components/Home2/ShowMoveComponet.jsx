import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function ShowMoveComponet({ data }) {
	const scrollContainerRef = useRef(null);
	const [hovered, setHovered] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [selectedVideo, setSelectedVideo] = useState(null);
	const videoRef = useRef(null);

	const handleVideoClick = () => {
		if (videoRef.current) {
			if (videoRef.current.paused) {
				videoRef.current.play();
			} else {
				videoRef.current.pause();
			}
		}
	};
	if (!data || data.length === 0) {
		return (
			<div className="text-center text-white py-10">
				<p>You currently do not have any movies.</p>
			</div>
		);
	}
	

	return (
		<div
			className="relative bg-opacity-50"
			style={{ height: "auto" }}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}>
			<div ref={scrollContainerRef} className="grid lg:grid-cols-4 xl:grid-cols-5  md:grid-cols-3  sm:grid-cols-2 grid-cols-1  gap-3 h-auto">
				{data.map((video) => (
					<div
						key={video.id}
						className="w-full flex items-center justify-center relative h-96">
						<video
							src={video.video_files[0]?.link}
							className="w-full h-full object-cover object-top cursor-pointer"
							onClick={() => {
								setSelectedVideo(video);
								setShowModal(true);
							}}
						/>
					</div>
				))}
			</div>

			{/* Modal */}
			{showModal && selectedVideo && (
				<div className="fixed inset-0 text-white bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div
						className="bg-black rounded-md shadow-md w-full max-w-xl relative"
						style={{ height: "400px" }}>
						<video
							ref={videoRef}
							src={selectedVideo.video_files[0]?.link}
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
								onClick={() => setShowModal(false)}>
								<Icon
									icon="bitcoin-icons:cross-outline"
									width="40"
									height="40"
								/>
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
							<Link
								to="/videos"
								state={{ videos: selectedVideo.video_files[0]?.link }}>
								<button className="rounded-md font-montserrat font-semibold px-6 py-4 m-4 bg-white text-black">
									Play →
								</button>
							</Link>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
