import { Link } from "react-router-dom";
import Gallery from "../../components/Gallery";

import "./index.scss";

const Work = (props: any) => {
	return (
		<section className="load-content">
			<div className="page-title">
				<div>
					<h1>
						My Work<span className="period">.</span>
					</h1>
				</div>
				<div>
					<h2>This is what you came for:</h2>
				</div>
			</div>
			<div className="main-content">
				<Gallery projects={props.projects} />
			</div>
			<div className="footer-link">
				<div>
					Ready to get started?{" "}
					<Link to="/contact">Get in touch.</Link>
				</div>
			</div>
		</section>
	);
};

export default Work;
