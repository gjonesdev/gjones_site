import logo from './logo.svg';
import './index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from "../components/Nav";
import Home from "../pages/Home";
import About from "../pages/About";
import Work from "../pages/Work";
import OtherStuff from "../pages/OtherStuff";
import Contact from "../pages/Contact";
// import FlettExchange from "../pages/Work/flett-exchange/FlettExchange";
// import JonesBoys from "../pages/Work/jones-boys/JonesBoys";
// import LifeInGeneral from "../pages/Work/life-in-general/LifeInGeneral";
// import SwapStop from "../pages/Work/swap-stop/SwapStop";

const App = () => (
	<Router>
		<Nav />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/work" element={<Work />} />
			<Route path="/other-stuff" element={<OtherStuff />} />
			<Route path="/contact" element={<Contact />} />
			{/*REPLACE WITH MODULES*/}
			{/* <Route path="work/flett-exchange" element={<FlettExchange />} />
			<Route path="work/jones-boys" element={<JonesBoys />} />
			<Route path="work/life-in-general" element={<LifeInGeneral />} />
			<Route path="work/swap-stop" element={<SwapStop />} /> */}
		</Routes>
	</Router>
);

export default App;