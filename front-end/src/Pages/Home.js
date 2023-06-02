import React from "react";

const Home = () => {
	return (
		<div className="">
      <video autoPlay muted loop className="w-screen h-screen object-cover">
        <source src="Background.mp4" type="video/mp4" />
      </video>
      <div className="text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <p className="text-4xl drop-shadow">Experience the interstellar symphony as a 'SpaceWatcher' orchestrated by India's ISRO, where cosmic harmonies and Earthly aspirations merge.</p>
      </div>
    </div>
	);
};

export default Home