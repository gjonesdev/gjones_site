import './index.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Asterisk from "../../components/Asterisk";

const Home = () => {
	useEffect(() => { })
	return (
		<div>
			<div id="asterisk-canvas"></div>
			<section id="asterisk" className="load-content">
				<div id="welcome">
					<div>
						<h1><u>Welcome<span className="period">.</span></u></h1>
					</div>
					<div>
						<h2>I hope you like fun.</h2>
					</div>
				</div>
				<Asterisk />
				<div className="scroll-indicator" id="scroll-home">
					<i className="fas fa-chevron-down fa-3x"></i>
				</div>
				<span id="popup-container">
					<span id="info-popup">
						<i className="fa fa-times fa-3x" id="popup-close-button" /*onClick="hidePopup()"*/></i>
						<span id="controls">
							<h1><u>Controls:</u></h1>
							<h1>Press W to move Up</h1>
							<h1>Press S to move Down</h1>
							<h1>Press B to Shoot</h1>
							<h1>Press P to Pause and Hide the Game</h1>
						</span>
						<span id="change-log">
							<h1><u>VER 1.02 Changes:</u></h1>
							<h1>Added leader board functionality</h1>
						</span>
					</span>
					<span id="popup-dim" /*onClick="hidePopup()"*/></span>
				</span>
			</section>
			<span id="stat-container">
				<p id="lives"></p>
				<p id="points"></p>
			</span>
			<section className="scroll-content">
				<div className="page-title">
					<div>
						<h1>Hi there<span className="period">.</span></h1>
					</div>
					<div>
						<h2>It's nice to meet you.</h2>
					</div>
				</div>
				<div className="main-content">
					<div id="intro">
						<p>My name is <Link to="/about/">Gaetano Jones</Link>,
							but you can call me Guy.</p>
					</div>
					<div>
						<p>I am a Front End Web Developer and UI Designer.</p>
						<p>I started my career as a design student, but somewhere along the line I decided to be a developer
							too. It turns out I really, <i>really</i>, like making things work.</p>
						<p>As I've mentioned, my professional work is mainly <Link to="/work/">UI and Front End</Link> related
							projects, but as you might have noticed I sometimes find myself working on <Link
								to="/other-stuff/">other stuff</Link>
							too.</p>
					</div>
				</div>
			</section>
		</div>
	)
};

export default Home;