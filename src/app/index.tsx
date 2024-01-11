import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../components/Nav";
import Home from "../pages/Home";
import About from "../pages/About";
import Work from "../pages/Work";
import Contact from "../pages/Contact";
import Project from "../pages/Project";

import "./index.scss";

const App = () => {
	const work = {
		flettExchange: {
			title: "Flett Exchange",
			subtitle: "24/7 Brokerage for your solar investments.",
			description: `Flett Exchange is a leading environmental brokerage company,
			known most as being a leader in solar credit trading. As a
			growing company, the Flett Exchange site was in need of in
			need of new webpages, as well as an aesthetic refresher to
			make company visuals a little more modern. Unfortunately not
			all changes proposed in these mockups made the cut, and thus
			do not accurately represent the current state of the site.`,
			path: "/work/flett-exchange",
			url: "https://www.flettexchange.com/",
			thumbnail: "/assets/images/flettexchange/Thumbnail.png",
			tags: ["Javascript", "Bootstrap", "Django"],
		},
		jonesBoys: {
			title: "Jones Boys",
			subtitle: "Jones Boys get it done right.",
			description: `Jones Boys Fencing is a young trade based company, 
			that primarily focuses in fencing installations. 
			As a newly formed company, Jones Boys only needed a website to reach 
			more customers and display information. Thus, the layout, design, and 
			functionality of the site was kept clean and straightforward to avoid
			unnecessary bloat and confusion.`,
			path: "/work/jones-boys",
			url: "https://jonesboysfencing.com/",
			thumbnail: "/assets/images/jonesboys/Thumbnail.png",
			tags: ["Javascript"],
		},
		// swapStop: {
		// 	title: "Swap Stop",
		// subtitle: "Trading your stuff has never been easier.",
		// description: `Swap Stop is a work in progress project based on the foundation of
		// sharing communities in the form of hardware trading. This mockup outlines an
		// efficient UI for a streamlined trading site that would provide a dedicated
		// platform for a community typically found on forums. The outcome is a detailed
		// desktop and mobile platform prototype for a website that allows PC builders to
		// exchange hardware, while also cutting down on e-waste and pollution from
		// discarded PC parts.`
		// 	path: "/work/swap-stop",
		// 	thumbnail: "/assets/images/swapstop/Thumbnail.png",
		// 	tags: [""],
		// },
	};

	return (
		<Router>
			<Nav />
			<hr className="basebar" />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/work" element={<Work projects={work} />} />
				<Route path="/contact" element={<Contact />} />

				<Route
					path="/work/flett-exchange"
					element={<Project {...work.flettExchange} />}
				/>
				<Route
					path="/work/jones-boys"
					element={<Project {...work.jonesBoys} />}
				/>
				{/* <Route path="/work/swap-stop" element={<Project {...work.swapStop}/>} /> */}
			</Routes>
		</Router>
	);
};

export default App;
