import { Link } from 'react-router-dom';
import Carousel from "../../../components/Carousel";

const JonesBoys = () => {
	const importAll = (r) => {
		return r.keys().map(r);
	}
	const gallery = importAll(require.context('/public/assets/images/jonesboys', false, /\.(png)$/));

	return (
		<section className="load-content">
			<div className="page-title">
				<span className="back">
					<Link to="/work/"><i className="fas fa-arrow-alt-circle-left"></i> Back to selection</Link>
				</span>
				<div>
					<h1>Jones Boys<span className="period">.</span></h1>
				</div>
				<div>
					<h2>Jones Boys get it done right.</h2>
				</div>
			</div>

			<span id="popup-container">
				<img id="img-popup" src="#" alt="" />
				<i className="fa fa-times fa-3x" id="popup-close-button" onclick="hidePopup()"></i>
				<span id="popup-dim" onclick="hidePopup()"></span>
			</span>
			<Carousel gallery={gallery} />
			<span className="website-link">
				<a href="https://jonesboysfencing.com/" target="_blank" rel="noreferrer">Visit the Jones Boys Fencing website <i
					className="fas fa-arrow-alt-circle-right"></i></a>
			</span>
			<div className="project-description">
				<h2><u>The Project<span className="period">.</span></u></h2>
				<p>Jones Boys Fencing is a young trade based company, that primarily focuses in fencing installations.
					As a newly formed company, Jones Boys only needed a website to reach more customers and display
					information. Thus,
					the layout, design, and functionality of the site was kept clean and straigtforward to avoid
					unnecessary bloat and confusion.</p>
			</div>
		</section>
	)
};

export default JonesBoys;