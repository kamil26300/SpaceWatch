import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/Card";
import { AiOutlineArrowUp } from 'react-icons/ai'
import "../App.css";

const LiveLaunch = () => {
	let [results, setResults] = useState([]);
	useEffect(() => {
		axios
			.get("https://fdo.rocketlaunch.live/json/launches/next/5")
			.then((res) => setResults(res.data.result));
	}, []);

	const LiveCards = results.map((obj, id) => {
		return <Card obj={obj} key={id} id={id} />;
	});

	const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

	return (
		<div id="FutureLaunches" className="LiveLaunch w-[80%] mx-auto mt-[180px]">
			<h1 className="text-4xl font-bold my-4">Future Launches: </h1>
			<div className="scrollbar-none flex overflow-x-auto gap-[2.5vh]">
				{LiveCards}
				<button
        className="fixed text-white bg-[#1e1e1e] p-4 rounded-3xl"
        onClick={handleScroll}
      >
        <AiOutlineArrowUp/>
      </button>
			</div>
      <div className="flex float-right">Swipe -----</div>
		</div>
	);
};

export default LiveLaunch;
