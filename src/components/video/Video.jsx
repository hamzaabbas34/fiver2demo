import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);
  const location = useLocation();
  const srcVideo = location.state?.videos;
  console.log(srcVideo,"src")

  useEffect(() => {
    const video = document.getElementById("myVideo");
    if (video && srcVideo) {
      video.play();
      setIsPlaying(true);
    }
  }, [srcVideo]); // Run this effect whenever the srcVideo changes.

  const handlePlayPause = () => {
    const video = document.getElementById("myVideo");
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleForward = () => {
    const video = document.getElementById("myVideo");
    video.currentTime += 2;
  };

  const handleBackward = () => {
    const video = document.getElementById("myVideo");
    video.currentTime -= 2;
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-black relative">
      <video
        id="myVideo"
        className="w-full h-full object-contain"
        autoPlay
        controls
      >
        {srcVideo ? (
          <source src={srcVideo} type="video/mp4" />
        ) : (
          <p>Your browser does not support the video tag.</p>
        )}
      </video>
      <div className="flex gap-4 mt-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button
          onClick={handleBackward}
          className="px-4 py-2 text-white bg-inherit rounded hover:bg-black  hover:bg-opacity-20 "
        >
         <Icon icon="solar:rewind-forward-broken" width="40" height="40" rotate={"180deg"} />
        </button>
        <button
          onClick={handlePlayPause}
          className="px-4 py-2 text-white bg-inherit rounded hover:bg-black  hover:bg-opacity-20 "
        >
          {isPlaying ? <Icon icon="line-md:play-filled-to-pause-transition" width="40" height="40" /> : <Icon icon="solar:play-bold" width="40" height="40" />}
        </button>
        <button
          onClick={handleForward}
          className="px-4 py-2 text-white bg-inherit rounded hover:bg-black  hover:bg-opacity-20"
        >
        <Icon icon="solar:rewind-forward-broken" width="40" height="40" />
        </button>
      </div>
    </div>
  );
}
