import { Link } from 'react-router-dom';
import Carousel from "../../../components/Carousel";

const LifeInGeneral = () => {
	const importAll = (r) => {
		return r.keys().map(r);
	}
	const gallery = importAll(require.context('/public/assets/images/lifeingeneral', false, /\.(png)$/));
	return (
		<section className="load-content">
			<div className="page-title">
				<span className="back">
					<Link to="/work/"><i className="fas fa-arrow-alt-circle-left"></i> Back to selection</Link>
				</span>
				<div>
					<h1>Life In General<span className="period">.</span></h1>
				</div>
				<div>
					<h2>Perspectives from all ages, 15 minutes at a time.</h2>
				</div>
			</div>

			<span id="popup-container">
				<img id="img-popup" src="#" alt="" />
				<i className="fa fa-times fa-3x" id="popup-close-button" onclick="hidePopup()"></i>
				<span id="popup-dim" onclick="hidePopup()"></span>
			</span>
			<Carousel gallery={gallery} />
			<span className="website-link">
				<a href="http://lifeingeneral.online/" target="_blank" rel="noreferrer">Visit the Life in General
					website <i className="fas fa-arrow-alt-circle-right"></i></a>
			</span>

			<div className="project-description">
				<h2><u>The Project<span className="period">.</span></u></h2>
				<p>Life in General was a className project at Stevens Institute of Technology focusing on creating
					multi generational discussions documented in podcasts. Discussion looked to bring down generational
					divides with topics ranging from simple things like bubble tea, to more complex
					subjects like art and technology. A complete visual system, including thumbnails and page borders,
					were created as a collaborative undertaking and hosted with podcasts on a wordpress platform. </p>
			</div>
		</section>
	)
};

export default LifeInGeneral;