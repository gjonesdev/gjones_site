import "./index.scss";

export const BootScreen = () => (
	<div id="bootscreen">
		<h1>
			Press Enter to play Asterisk*{" "}
			<i className="fas fa-caret-right" id="press-enter"></i>
		</h1>
		<h2 /*onClick="showPopup()"*/>
			<u>
				<span id="info-button">
					<i>ver 1.02</i>
					<i className="fas fa-question-circle "></i>
				</span>
			</u>
		</h2>
	</div>
);

export const StatScreen = (props: any) => (
	<div id="bootscreen">
		<div>{props.lives}</div>
		<div>{props.score}</div>
	</div>
);

export const PauseScreen = () => (
	<div id="bootscreen">
		<h1>Asterisk* is paused. You can resume the game by pressing P.</h1>
	</div>
);

export const GameOverScreen = () => (
	<div id="bootscreen">
		<h1>GAME OVER</h1>
		<h1>Press Enter to play Again</h1>
	</div>
);
