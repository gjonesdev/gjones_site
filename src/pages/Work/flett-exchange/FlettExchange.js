import { Link } from 'react-router-dom';
import Carousel from "../../../components/Carousel";

const FlettExchange = () => {
	const importAll = (r) => {
		return r.keys().map(r);
	}
	const gallery = importAll(require.context('/public/assets/images/flettexchange', false, /\.(png)$/));
	return (
		<section className="load-content">
			<div className="page-title">
				<span className="back">
					<Link to="/work/"><i className="fas fa-arrow-alt-circle-left"></i> Back to selection</Link>
				</span>
				<div>
					<h1>Flett Exchange<span className="period">.</span></h1>
				</div>
				<div>
					<h2>24/7 Brokerage for your solar investments.</h2>
				</div>
			</div>

			<span id="popup-container">
				<img id="img-popup" src="#" alt="" />
				<i className="fa fa-times fa-3x" id="popup-close-button" onClick="hidePopup()"></i>
				<span id="popup-dim" onClick="hidePopup()"></span>
			</span>
			<Carousel gallery={gallery} />
			<span className="website-link">
				<a href="https://www.flettexchange.com/" target="_blank" rel="noreferrer">Visit the Flett Exchange Website <i
					className="fas fa-arrow-alt-circle-right"></i></a>
			</span>
			<div className="project-description">
				<h2><u>The Project<span className="period">.</span></u></h2>
				<p>Flett Exchange is a leading environmental brokerage company, known most as being a leader in
					solar credit trading. As a growing company, the Flett Exchange site was in need of in need of
					new webpages, as well as an aesthetic refresher to make company visuals a little more modern.
					To allow established users an opportunity to grow accustomed to new changes, these updates are
					rolled out incrementally.</p>
				<span className="website-link-mobile">
					<a href="https://www.flettexchange.com/" target="_blank" rel="noreferrer">Visit the Flett Exchange Website <i
						className="fas fa-arrow-alt-circle-right"></i></a>
				</span>
			</div>

		</section>
	);
};

export default FlettExchange;