import React, { useEffect, useState } from "react";
import axios from 'axios'
import Logo from "../Images/logo.svg"
import SpaceWatch from "../Images/SpaceWatch.svg"
// import { useParams } from "react-router-dom";

const LaunchDetails = () => {
  // const id = useParams()
  let [results, setResults] = useState([]);
	useEffect(() => {
		axios
			.get("https://fdo.rocketlaunch.live/json/launches/next/5")
			.then((res) => setResults(res.data.result));
	}, []);
  // const result = results[Number(0)]
	return (
		<div >
			<div className="text-lg font-semibold lg:flex gap-5 p-6">
				<img className="w-28" src={Logo} alt="logo" />
				<img
					className="mt-1 lg:mt-0 w-28 lg:w-56"
					src={SpaceWatch}
					alt="logo"
				/>
			</div>
    <div className="mx-auto w-min">
      {results.name}
    </div>
		</div>
	);
};

export default LaunchDetails;
