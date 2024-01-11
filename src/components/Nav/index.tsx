import "./index.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
	const [showNav, setShowNav] = useState(false);
	const toggleNav = () => setShowNav(!showNav);

	return (
		<div>
			<div className={`nav ${showNav ? "visible" : "hidden"}`}>
				<i
					className={`nav-btn_closed fa fa-times fa-4x ${
						showNav ? "visible" : "hidden"
					}`}
					onClick={toggleNav}
				></i>
				<i
					className={`nav-btn_open fa fa-bars fa-3x ${
						showNav ? "hidden" : "visible"
					}`}
					onClick={toggleNav}
				></i>
				<div className="nav-content">
					<div className="logo">
						<u className="red-under">Gaetano</u>
						<br />
						Jones
					</div>
					<Link to="/" onClick={toggleNav}>
						Home
					</Link>
					<Link to="/work" onClick={toggleNav}>
						My Work
					</Link>
					<Link to="/about" onClick={toggleNav}>
						About Me
					</Link>
					<Link to="/contact" onClick={toggleNav}>
						Contact
					</Link>
				</div>
			</div>
			<div
				className={`nav-dim ${showNav ? "dim-visible" : "dim-hidden"}`}
				onClick={toggleNav}
			></div>
		</div>
	);
};

export default Nav;
