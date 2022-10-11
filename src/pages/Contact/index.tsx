import './index.scss';
import SubmitContact from './api';

const Contact = () => (
	<section className="load-content">
		<div className="page-title">
			<div>
				<h1>Contact<span className="period">.</span></h1>
			</div>
			<div>
				<h2>Drop a line.</h2>
			</div>
		</div>
		<div className="main-content">
			<span id="form-container">
				<div>
					<p>Have a project for me? Feedback? Questions? Just want to say hi?</p>
					<p>Just fill out the form and I'll get back to you quick.</p>
				</div>
				<form method="POST" action="/index.php" id="contact-form"
					/*onsubmit="contact_submit(); return false;"*/>
					<div>
						<ul>
							<li><label>Name:</label> <input id="name" name="name" placeholder="Name" type="text"
								/*oninput="hide_confirmation()"*/ />
								<label>Email:</label> <input id="email" name="email" placeholder="Email"
									type="email" /*oninput="hide_confirmation()" required*/ />
							</li>
							<li><label>Subject:</label> <input name="subject" placeholder="Subject" type="text"
								/*oninput="hide_confirmation()"*/ />
							</li>
							<li><label>Message:</label> <textarea id="message" name="message" placeholder="Message"
								rows={4} /*oninput="hide_confirmation()"*/ required></textarea>
							</li>
							<li><input id="submit-button" name="sendflag" type="submit" value="send" />
								<h3 id="confirmation"></h3>
							</li>
						</ul>
					</div>
				</form>
			</span>

			<div id="contact-links">
				<p>You can also find me on the following sites:</p>
				<a id="github" href="https://github.com/gjonesdesign" target="_blank" rel="noreferrer"><i
					className="fab fa-github fa-2x"></i></a>
				<a id="linkedin" href="https://www.linkedin.com/in/gaetanojones/" target="_blank" rel="noreferrer"><i
					className="fab fa-linkedin fa-2x"></i></a>
			</div>
		</div>

	</section>
);

export default Contact;


// function hide_confirmation() {
// 	var confirmation = document.getElementById("confirmation");
// 	confirmation.style.opacity = '0';
// 	confirmation.style.transform = "translateY(30px)";
// }

// function lightbox(img_path) {
// 	document.getElementById("img-popup").src = "/styles/images/" + img_path;
// 	showPopup();
// }

// function carouselLightbox(img_path, iscurr) {
// 	if (iscurr === "current") {
// 		document.getElementById("img-popup").src = "/styles/images/" + img_path;
// 		showPopup();
// 	}
// }