import "./App.css";
import Home from "./Pages/Home.js";
import Navbar from "./Components/Navbar";
import LiveLaunch from "./Pages/LiveLaunch";
import { Route, Routes } from "react-router-dom";
import LaunchDetails from "./Pages/LaunchDetails";
import APOD from "./Pages/APOD";

function App() {
	const Front = () => {
		return (
			<>
				<Navbar />
				<Home />
				<LiveLaunch />
        <APOD/>
			</>
		);
	};
	return (
		<div className="App text-white ">
			<Routes>
				<Route path="/" exact element={<Front />} />
				<Route path="/launches/:id" exact element={<LaunchDetails />} />
			</Routes>
		</div>
	);
}

export default App;
