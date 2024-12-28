import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./home.css";
import "swiper/css/scrollbar";

const HeroSection = () => {
	const slides = [
		{
			title: "Laugh out loud",
			description:
				"Punchlines, puns, and plenty of laughs. Nonstop comedy for everyone and anyone.",
			image:
				"https://i.pinimg.com/1200x/19/8b/2f/198b2f01e73b905772279616eccc7c65.jpg",
		},
		{
			title: "When the Phone Rings",
			description: "Experience suspense and mystery like never before.",
			image:
				"https://i.pinimg.com/1200x/19/8b/2f/198b2f01e73b905772279616eccc7c65.jpg",
		},
		{
			title: "Sex/Life",
			description: "A captivating drama that explores love and relationships.",
			image:
				"https://i.pinimg.com/1200x/19/8b/2f/198b2f01e73b905772279616eccc7c65.jpg",
		},
	];

	return (
		<div className=" text-white pt-10 w-[80%] mx-auto relative ">
			<Swiper
				modules={[Navigation, Pagination]}
				spaceBetween={30}
				slidesPerView={1}
				navigation
				pagination={{
					clickable: true,
					renderBullet: (index, className) => {
						return `<span class="${className}" style="width: 50px; height: 5px; background-color: ${
							index === 0 ? "white" : "white"
						}; border-radius: 5px; display: inline-block; margin: 0 4px; z-index: 1000; position: relative;"></span>`;
					},
				}}
				autoplay={{ delay: 3000 }}
				loop
				className="h-[550px] w-full ">
				{slides.map((slide, index) => (
					<SwiperSlide key={index}>
						<div className="  relative box-border py-3   flex flex-col justify-end items-start px-0 overflow-hidden w-full h-[90%]">
							{/* Image is now an img tag with absolute positioning */}
							<img
								src={slide.image}
								alt={slide.title}
								className="absolute top-0 left-0 w-full h-full object-cover "
								style={{
									borderRadius: "13px", // Apply border-radius
									background: "linear-gradient(to right, white, black)", // Gradient background
									padding: "5px 0px 0px 5px", // Padding to make it visible
									boxShadow: "0 0 0 5px rgba(0,0,0,0)", // Create space for the shadow effect
									overflow: "hidden", // Ensure the content doesn't overflow
								}}
							/>
							<div className="absolute bottom-10 left-10 p-5 max-w-[600px] text">
								<h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
								<p className="text-lg max-w-2xl">{slide.description}</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default HeroSection;
