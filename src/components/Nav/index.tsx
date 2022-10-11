import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Nav = () => {

	let [open, setOpen] = useState(false);
	const toggle = () => setOpen(!open);

	return (
		<div>
			<div className="load-container">
				<div></div>
				<div>
					<h1>:)</h1>
				</div>
			</div>

			<div id="sidenav" className={open ? "open" : "closed"}>
				<i className={`fa fa-bars fa-3x ${open ? "closed" : "open"}`} id="navopenbtn" onClick={toggle} ></i>
				<i className={`fa fa-times fa-3x ${open ? "open" : "closed"}`} id="navclosebtn" onClick={toggle} ></i>
				<div id="sidenav-content">
					<div className="logo">
						<u className="red-under">Gaetano</u><br />Jones</div>
					<Link to="/" onClick={toggle}>Home</Link>
					<Link to="/about/" onClick={toggle}>About Me</Link>
					<Link to="/work/" onClick={toggle}>My Work</Link>
					<Link to="/other-stuff/" onClick={toggle}>Other Stuff</Link>
					<Link to="/contact/" onClick={toggle}>Contact</Link>
				</div>
			</div>
			<div id="sidenav-bar">
			</div>
			<div id="nav-dim" className={open ? "open" : "closed"} onClick={toggle} ></div>
			<hr className="basebar" />
		</div>
	)
};

export default Nav;