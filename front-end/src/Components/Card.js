import React from "react";
import '../App.css'

const Card = ({ obj, id }) => {
  const Img1 = "CRS2 SpX-28 (Dragon).jpg";
	const Img2 = "Starlink-86 (6-4).jpg";
	const Img3 = "Transporter-8.jpg";
	const Img4 = "Syracuse-4B.jpg";
	const Img5 = "NROL-68.jpg";

	const launchImg = { 0: Img1, 1: Img2, 2: Img3, 3: Img4, 4: Img5 };

	return (
		<div id={id} className="card bg-[#312d31] shadow-lg rounded-lg overflow-hidden flex-none">
			<img
				className="w-full h-80 object-cover "
				src={launchImg[(Number(id))]}
				alt="CardImage"
			/>
			<div className="p-6">
				<h2 className="text-xl font-bold mb-2">{obj.name}</h2>
				<p className="text-[#e4dada] mb-4">
					{obj.launch_description}
				</p>
				<a href="/" className="text-blue-500 hover:text-blue-700 font-bold">
					Read More
				</a>
			</div>
		</div>
	);
};

export default Card;
