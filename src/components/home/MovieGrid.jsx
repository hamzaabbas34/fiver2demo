import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./mov.css"
const MovieGrid = ({title}) => {
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
    {
      title: "Sex/Life",
      description: "A captivating drama that explores love and relationships.",
      image:
        "https://i.pinimg.com/1200x/19/8b/2f/198b2f01e73b905772279616eccc7c65.jpg",
    },
    {
      title: "Sex/Life",
      description: "A captivating drama that explores love and relationships.",
      image:
        "https://i.pinimg.com/1200x/19/8b/2f/198b2f01e73b905772279616eccc7c65.jpg",
    },
    {
      title: "Sex/Life",
      description: "A captivating drama that explores love and relationships.",
      image:
        "https://i.pinimg.com/1200x/19/8b/2f/198b2f01e73b905772279616eccc7c65.jpg",
    },
    {
      title: "Sex/Life",
      description: "A captivating drama that explores love and relationships.",
      image:
        "https://i.pinimg.com/1200x/19/8b/2f/198b2f01e73b905772279616eccc7c65.jpg",
    },
    {
      title: "Sex/Life",
      description: "A captivating drama that explores love and relationships.",
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
    <div className="text-white pt-10 w-[100%] myclsdfsadf   px-8  mx-auto relative">
      <div className=" py-5">
        <h2 className=" text-2xl font-montserrat font-semibold ">{title}</h2>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={6} // Display 3 slides at a time
        navigation
        pagination={{
          clickable: false,
          el: null, // This hides the pagination dots
        }}
        loop
        className="h-[400px] w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative box-border py-3 flex flex-col items-center w-[240px] h-[350px]">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-[240px] h-[350px] object-cover rounded-md shadow-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieGrid;
