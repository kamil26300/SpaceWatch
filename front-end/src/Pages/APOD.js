import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const LiveLaunch = () => {
	let [Apod, setApod] = useState({});
	useEffect(() => {
		axios
			.get(
				"https://api.nasa.gov/planetary/apod?api_key=7PDuOcxgNNn2SFD1awJm09CpKvwgb8DnzY9EzdDb"
			)
			.then((res) => setApod(res.data));
	}, []);

	const Card1 = () => {
		return (
			<div className="bg-[#312d31] shadow-lg rounded-lg">
				<div className="p-6">
					<h2 className="text-xl font-bold mb-2">{Apod.title}</h2>
					<img
						className="my-6 rounded-3xl"
						src={Apod.hdurl}
						alt="CardImage"
					/>
					<p className="text-[#e4dada] mb-4">{Apod.explanation}</p>
				</div>
			</div>
		);
	};

	return (
		<div id="AOPD" className="w-[80%] mx-auto mt-[180px]">
			<h1 className="text-4xl font-bold my-4">
				Astronomy Picture of the Day:
			</h1>
			{Card1()}
		</div>
	);
};

export default LiveLaunch;
