import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel";

import "./index.scss";

const Project = (props: any) => {
	const importAll = (r: any) => {
		return r.keys().map(r);
	};
	const gallery = "";
	// importAll(
	// 	require.context(
	// 		`/public/assets/images/${props.title
	// 			.split(" ")
	// 			.join("")
	// 			.toLowerCase()}`,
	// 		false,
	// 		/\.(png)$/
	// 	)
	// );
	return (
		<section className="load-content">
			<div className="page-title">
				<span className="back">
					<Link to="/work/">
						<i className="fas fa-arrow-alt-circle-left"></i> Back to
						selection
					</Link>
				</span>
				<div>
					<h1>
						{props.title}
						<span className="period">.</span>
					</h1>
				</div>
				<div>
					<h2>{props.subtitle}</h2>
				</div>
			</div>

			{/* <span id="popup-container">
				<img id="img-popup" src="#" alt="" />
				<i
					className="fa fa-times fa-3x"
					id="popup-close-button"
					onClick="hidePopup()"
				></i>
				<span id="popup-dim" onClick="hidePopup()"></span>
			</span> */}
			<Carousel gallery={gallery} />
			<span className="website-link">
				<a href={props.url} target="_blank" rel="noreferrer">
					Visit the {props.title} Website{" "}
					<i className="fas fa-arrow-alt-circle-right"></i>
				</a>
			</span>
			<div className="description">
				<h2>
					<u>
						The Project<span className="period">.</span>
					</u>
				</h2>
				<p>{props.description}</p>
				<span className="website-link-mobile">
					<a
						href="https://www.flettexchange.com/"
						target="_blank"
						rel="noreferrer"
					>
						Visit the {props.title} Website{" "}
						<i className="fas fa-arrow-alt-circle-right"></i>
					</a>
				</span>
			</div>
		</section>
	);
};

export default Project;
