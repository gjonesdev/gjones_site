import { Link } from 'react-router-dom';
import Carousel from "../../../components/Carousel";

const SwapStop = () => {
	const importAll = (r) => {
		return r.keys().map(r);
	}
	const gallery = importAll(require.context('/public/assets/images/swapstop', false, /\.(png)$/));

	return (
		<section className="load-content">
			<div className="page-title">
				<span className="back">
					<Link to="/work/"><i className="fas fa-arrow-alt-circle-left"></i> Back to selection</Link>
				</span>
				<div>
					<h1>Swap Stop<span className="period">.</span></h1>
				</div>
				<div>
					<h2>Trading your stuff has never been easier.</h2>
				</div>
			</div>

			<span id="popup-container">
				<img id="img-popup" src="#" alt="" />
				<i className="fa fa-times fa-3x" id="popup-close-button" onclick="hidePopup()"></i>
				<span id="popup-dim" onclick="hidePopup()"></span>
			</span>
			<Carousel gallery={gallery} />
			<div className="project-description">
				<h2><u>The Project<span className="period">.</span></u></h2>
				<p>Swap Stop is a work in progress project based on the foundation of sharing communities in the form of
					hardware trading. This mockup
					outlines an efficient UI for a streamlined trading site that would provide a dedicated platform for
					a community typically found on forums.
					The outcome is a detailed desktop and mobile platform prototype for a website that allows PC
					builders to
					exchange hardware, while also cutting down on e-waste and pollution from discarded PC parts.</p>
			</div>
		</section>
	)
};

export default SwapStop;