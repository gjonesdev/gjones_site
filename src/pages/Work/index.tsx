import './index.scss';
import { Link } from 'react-router-dom';

const Work = () => (
	<section className="load-content">
		<div className="page-title">
			<div>
				<h1>UI and Web Design<span className="period">.</span></h1>
			</div>
			<div>
				<h2>Designer by day, developer also by day.</h2>
			</div>
		</div>
		<div className="main-content">
			<span className="project-gallery">
				<span className="project-item">
					<Link to="/work/flett-exchange/">Flett Exchange<span className="period">.</span></Link>
					<span className="project-thumbnail">
						<Link className="img-overlay" to="/work/flett-exchange/">
							<ul>
								<li>Flett Exchange</li>
								<li>Design and Development</li>
								<li>-HTML & CSS</li>
								<li>-Javascript</li>
								<li>-Bootstrap</li>
								<li>-Django</li>
								<li>-Adobe XD</li>
							</ul>
						</Link>
						<img src="/assets/images/flettexchange/Thumbnail.png" alt="" />
					</span>
				</span>
				<span className="project-item">
					<Link to="/work/jones-boys/">Jones Boys<span className="period">.</span></Link>
					<span className="project-thumbnail">
						<Link className="img-overlay" to="/work/jones-boys/">
							<ul>
								<li>Jones Boys</li>
								<li>Design and Development</li>
								<li>-HTML & CSS</li>
								<li>-Javascript</li>
								<li>-Adobe XD</li>
							</ul>
						</Link>
						<img src="/assets/images/jonesboys/Thumbnail.png" alt="" />
					</span>
				</span>
				<span className="project-item">
					<Link to="/work/swap-stop/">Swap Stop<span className="period">.</span></Link>
					<span className="project-thumbnail">
						<Link className="img-overlay" to="/work/swap-stop/">
							<ul>
								<li>Swap Stop</li>
								<li>Design</li>
								<li>-Adobe XD</li>
								<li>-UI UX Design</li>
								<li>-Layout Design</li>
							</ul>
						</Link>
						<img src="/assets/images/swapstop/Thumbnail.png" alt="" />
					</span>
				</span>
				<span className="project-item">
					<Link to="/work/life-in-general/">Life in General<span className="period">.</span></Link>
					<span className="project-thumbnail">
						<Link className="img-overlay" to="/work/life-in-general/">
							<ul>
								<li>Life In General</li>
								<li>Design and Development</li>
								<li>-HTML & CSS</li>
								<li>-Wordpress</li>
								<li>-Adobe Illustrator</li>
							</ul>
						</Link>
						<img src="/assets/images/lifeingeneral/Thumbnail.png" alt="" />
					</span>
				</span>
			</span>
		</div>
		<div className="portfolio-link">
			<div>
				Curious about the <Link to="/other-stuff/">other stuff?</Link>
			</div>
		</div>
	</section>
);

export default Work;