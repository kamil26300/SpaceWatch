import React, { useState } from "react";

const Hamburger = () => {
	const [isOpen, setIsOpen] = useState(false);
	const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

	return (
		<div className="block lg:hidden">
			<button
				className="flex flex-col h-12 w-12 border-2 border-white rounded justify-center items-center group"
				onClick={() => setIsOpen(!isOpen)}
			>
				<div
					className={`${genericHamburgerLine} ${
						isOpen
							? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
							: "opacity-50 group-hover:opacity-100"
					}`}
				/>
				<div
					className={`${genericHamburgerLine} ${
						isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
					}`}
				/>
				<div
					className={`${genericHamburgerLine} ${
						isOpen
							? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
							: "opacity-50 group-hover:opacity-100"
					}`}
				/>
			</button>
			<div
				className={`${
					isOpen
						? "bg-black/80 duration-3000 transition ease transform absolute right-0 font-bold text-2xl rounded-3xl"
						: "hidden"
				}`}
			>
				<ul className="grid gap-6 p-6">
					<li>
						<a href="/" className="hover:text-gray-300">
							Home
						</a>
					</li>
					<li>
						<a href="/" className="hover:text-gray-300">
							About
						</a>
					</li>
					<li>
						<a
							href="#FutureLaunches"
							className="hover:text-gray-300"
						>
							Future Launches
						</a>
					</li>
					<li>
						<a href="AOPD" className="hover:text-gray-300">
							AOPD
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Hamburger;
