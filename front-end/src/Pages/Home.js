import React from "react";
import { AiOutlineArrowUp } from 'react-icons/ai'

const Home = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };
	return (
		<div className="">
      <video autoPlay muted loop className="w-screen h-screen object-cover">
        <source src="Background.mp4" type="video/mp4" />
      </video>
      <div className="text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <p className="text-4xl drop-shadow">Experience the interstellar symphony as a 'SpaceWatcher' orchestrated by India's ISRO, where cosmic harmonies and Earthly aspirations merge.</p>
      </div>
      <button
        className="absolute text-white bg-[#1e1e1e] p-4  bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl"
        onClick={handleScroll}
      >
        <AiOutlineArrowUp/>
      </button>
    </div>
	);
};

export default Home