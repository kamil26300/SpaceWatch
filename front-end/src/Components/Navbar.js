import React from "react";
import Hamburger from "../Components/Hamburger"

const Navbar = () => {
	return (
		<nav className="fixed top-0 left-0 w-full bg-black/60 z-10">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between py-4">
					<div className="text-lg font-semibold lg:flex gap-5">
						<img className="w-28" src="logo.svg" alt="logo" />
						<img className="mt-1 lg:mt-0 w-28 lg:w-56" src="SpaceWatch.svg" alt="logo" />
					</div>
					<ul className="flex space-x-4">
						<li>
							<a href="/" className="hover:text-gray-300 hidden lg:block">
								Home
							</a>
						</li>
						<li>
							<a href="/" className="hover:text-gray-300 hidden lg:block">
								About
							</a>
						</li>
						<li>
							<a href="#FutureLaunches" className="hover:text-gray-300 hidden lg:block">
								Future Launches
							</a>
						</li>
						<li>
							<a href="/" className="hover:text-gray-300 hidden lg:block">
								Contact
							</a>
						</li>
					</ul>
					<Hamburger/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
