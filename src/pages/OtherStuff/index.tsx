const OtherStuff = () => (
	<section className="load-content">
		<div className="page-title">
			<div>
				<h1>Other Stuff<span className="period">.</span></h1>
			</div>
			<div>
				<h2>Everyone has a junk drawer, right?</h2>
			</div>
		</div>
		<span id="popup-container">
			<img id="img-popup" src="#" alt="" />
			<i className="fa fa-times fa-3x" id="popup-close-button" /*onclick="hidePopup()"*/></i>
			<span id="popup-dim" /*onclick="hidePopup()"*/></span>
		</span>
		<div className="main-content">
			<span className="other-gallery">
				<span className="gallery-item" id="first-item">
					<span className="img-overlay" /*onclick="lightbox('design/BorowskiComposition.png')"*/>
						<ul>
							<li>Borowski</li>
							<li>Typeface Composition</li>
							<li>-Typography</li>
							<li>-Composition</li>
							<li>-Photo Manipulation</li>
						</ul>
					</span>
					<img src="/assets/images/design/thumbnails/BorowskiThumbnail.png" alt="" />
				</span>
				<span className="gallery-item">
					<span className="img-overlay" /*onclick="lightbox('design/ItsLoomingMerch.png')"*/>
						<ul>
							<li>It's Looming</li>
							<li>Climate Change Campaign</li>
							<li>-Typography</li>
							<li>-Composition</li>
							<li>-Photography</li>
							<li>-Fabrication</li>
						</ul>
					</span>
					<img src="/assets/images/design/thumbnails/ItsLoomingThumbnail.png" alt="" /> </span>
				<span className="gallery-item">
					<span className="img-overlay" /*onclick="lightbox('design/DataDiveInfographic.gif')"*/>
						<ul>
							<li>Data Dive</li>
							<li>Animated Infographic</li>
							<li>-Typography</li>
							<li>-Composition</li>
							<li>-Animation</li>
						</ul>
					</span>
					<img src="/assets/images/design/thumbnails/DataDiveThumbnail.gif" alt="" />
				</span>
				<span className="gallery-item">
					<span className="img-overlay" /*onclick="lightbox('design/TPAlbumPoster.png')"*/>
						<ul>
							<li>Nah, Shut Up</li>
							<li>Album cover</li>
							<li>-Typography</li>
							<li>-Composition</li>
							<li>-Photo Manipulation</li>
						</ul>
					</span>
					<img src="/assets/images/design/thumbnails/TPAlbumThumbnail.png" alt="" />
				</span>
				<span className="gallery-item">
					<span className="img-overlay" /*onclick="lightbox('design/FightClubLogo.png')"*/>
						<ul>
							<li>Stevens <br />Fight Club</li>
							<li>Logo</li>
							<li>-Typography</li>
							<li>-Logo Design</li>
						</ul>
					</span>
					<img src="/assets/images/design/thumbnails/FightClubThumbnail.png" alt="" />
				</span>
				<span className="gallery-item">
					<span className="img-overlay" /*onclick="lightbox('design/TippsLogo.png')"*/>
						<ul>
							<li>Tipps</li>
							<li>Logo</li>
							<li>-Typography</li>
							<li>-Logo Design</li>
						</ul>
					</span>
					<img src="/assets/images/design/thumbnails/TippsThumbnail.png" alt="" />
				</span>
				<span className="gallery-item">
					<span className="img-overlay" /*onclick="lightbox('design/ToothlessLogo.png')"*/>
						<ul>
							<li>Toothless</li>
							<li>Logo</li>
							<li>-Typography</li>
							<li>-Logo Design</li>
						</ul>
					</span>
					<img src="/assets/images/design/thumbnails/ToothlessThumbnail.png" alt="" />
				</span>
				<span className="gallery-item" id="last-item">
					<span className="img-overlay" /*onclick="lightbox('design/FlockOfGeese.png')"*/>
						<ul>
							<li>Flock <br />of Geese</li>
							<li>Photo Composition</li>
							<li>-Composition</li>
							<li>-Photo Manipulation</li>
						</ul>
					</span>
					<img src="/assets/images/design/thumbnails/FlockOfGeeseThumbnail.png" alt="" />
				</span>
			</span>
		</div>
	</section>
);

export default OtherStuff;