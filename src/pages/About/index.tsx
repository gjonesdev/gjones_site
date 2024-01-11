import "./index.scss";

const About = () => (
	<section className="load-content">
		<div className="page-title">
			<div>
				<h1>
					About Me<span className="period">.</span>
				</h1>
			</div>
			<div>
				<h2>Allow me to reintroduce myself:</h2>
			</div>
		</div>
		<div className="main-content">
			<div>
				<h2>
					<u>
						I'm the Guy<span className="period">.</span>
					</u>
				</h2>
			</div>
			<div>
				<p>
					At least that's what my friends like to call me. Partially
					because it's my name, but also because I'm the Guy that does
					the thing that you need to do:
				</p>
				<ul>
					<li>
						Need a clean, memorable front page for your website? -
						I've got you covered.
					</li>
					<li>
						Visuals a little out of date and need modernizing? - I'm
						on it.
					</li>
					<li>
						Miscellaneous design work that wasn't in the job
						description? - No problem.
					</li>
					<li>
						Need someone lively, handsome, and funny to boost
						morale? - I'm your Guy.
					</li>
				</ul>
				<p>
					What makes my skills so unique are the years I spent
					studying design before getting really invested in
					development. My expertise doesn't just end at making you a
					website;{" "}
					<u>
						it ends at making you a really <i>cool</i> looking site.
					</u>{" "}
					A website that's more than just code. Something that is
					adaptable, interesting, and most of all nice to use.
					Something that will leave your users satisfied, and ready to
					come back. Whatever you need, <u>I'm the Guy for it.</u>
				</p>
			</div>
			<div className="the-guy">
				<p> Looking for more formal documentation of my skills?</p>
				<a
					href="https://www.linkedin.com/in/gaetanojones/"
					target="_blank"
					rel="noreferrer"
				>
					Connect with me on LinkedIn{" "}
					<i className="fas fa-arrow-alt-circle-right"></i>
				</a>
			</div>
		</div>
	</section>
);

export default About;
