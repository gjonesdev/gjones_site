// TODO: FIX BOOT SCREEN GAMEOVER SCREEN PAUSE SCREEN
// ADD DATA TO DATASTORE FOR PAUSED GAME SAVING
// UPDATE THE WAY THE GAME HANDLES PAGE TRANSITIONS
// CHANGE RESET INPUT TO BE TWO BUTTONS. NO RESET ON ENTER IF GAME RUNNING
import React, { useState, useEffect, useRef } from "react";
import Sketch from "react-p5";
import p5Types from "p5"
import { BootScreen, StatScreen, PauseScreen, GameOverScreen } from "./modules"

///////////
//classes//
//////////

class Player {
	direction: string;
	speed: number;
	y_top: number;
	y_mid: number;
	y_bot: number;
	x_back: number;
	x_front: number;

	constructor(speed: number, y_top: number, y_mid: number, y_bot: number, x_back: number, x_front: number) {
		this.direction = "none";
		this.speed = speed;
		this.y_top = y_top;
		this.y_mid = y_mid;
		this.y_bot = y_bot;
		this.x_back = x_back;
		this.x_front = x_front;
	}

	display(p5: p5Types) {
		p5.triangle(this.x_back, this.y_top, this.x_front, this.y_mid, this.x_back, this.y_bot);
	}

	update() {
		if (this.direction === "up" && this.y_top > 140) {
			this.y_top -= this.speed;
			this.y_mid -= this.speed;
			this.y_bot -= this.speed;
		}

		if (this.direction === "down" && this.y_bot < window.innerHeight - 80) {
			this.y_top += this.speed;
			this.y_mid += this.speed;
			this.y_bot += this.speed;
		}
	}
}

class Bullet {
	speed: number;
	x: number;
	y: number;
	w: number;
	h: number;

	constructor(speed: number, x: any, y: number, w: number, h: number) {
		this.speed = speed;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}

	display(p5: p5Types) {
		p5.rect(this.x, this.y, this.w, this.h);
	}

	update() {
		this.x += this.speed;
	}
}

class Obstacle {
	speed: number;
	x: number;
	y: number;
	w: number;
	h: number;

	constructor(speed: number, x: number, y: number, w: number, h: number) {
		this.speed = speed;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}

	display(p5: p5Types) {
		p5.rect(this.x, this.y, this.w, this.h);
	}

	update() {
		this.x -= this.speed;
	}
}

let obstacles: Obstacle[] = ([]);
let bullets: Bullet[] = ([]);
let player = new Player(7, window.innerHeight / 2 - 20, window.innerHeight / 2, window.innerHeight / 2 + 20, 40, 80);
let score = 0;
let lives = 3;
let game_screen = <BootScreen />;


const Asterisk = () => {
	/////////
	//main//
	////////
	const [gameState, setGameState] = useState("stopped");
	const [livesState, setLives] = useState(lives);
	const [scoreState, setScore] = useState(score);

	if (gameState === "running") {
		game_screen = <StatScreen lives={livesState} score={scoreState} />
	}


	const setup = (p5: p5Types, canvasParentRef: Element) => {
		const gameCanvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
		gameCanvas.parent("asterisk-canvas");

		p5.fill("white");
		p5.noStroke();
		p5.textSize(24);
		p5.rectMode(p5.CENTER);
	}

	const draw = (p5: p5Types) => {
		if (gameState === "running") {
			p5.background("#222222");
			renderPlayer(p5);
			renderObst(p5);
			renderShoot(p5);
		}
	}

	//////////////////
	//game mechanics//
	/////////////////

	function pause(p5: p5Types) {
		if (gameState === "running") {
			setGameState("paused");
			game_screen = <PauseScreen />;
			p5.background("#222222");
		} else if (gameState === "paused") {
			setGameState("running");
			game_screen = <StatScreen lives={livesState} />
			p5.background("#222222");
		}
	}


	const init = (p5: p5Types) => {
		let initObstacles: Obstacle[] = []
		for (let i = 0; i < 15; i++) {
			const size = (Math.random() * 80) + 40;
			const obst_speed = (Math.random() * 7) + 3;
			const newObstacle = new Obstacle(obst_speed, ((Math.random() * (window.innerWidth * 2)) + (window.innerWidth * 1.1)), ((Math.random() * (window.innerHeight - 80)) + (140 + 30)), size, size);
			initObstacles.push(newObstacle);
		}
		obstacles = initObstacles;
		bullets = [];

		lives = 3;
		setLives(lives);

		score = 0;
		setScore(score);

		player = new Player(7, window.innerHeight / 2 - 20, window.innerHeight / 2, window.innerHeight / 2 + 20, 40, 80);
		game_screen = <StatScreen lives={livesState} />;
		p5.background("#222222");
		setGameState("running");
	}

	const renderPlayer = (p5: any) => {
		player.update();
		player.display(p5);
	}

	const obstacleDespawn = (obstacle_index: number) => {
		const tempArray = obstacles;
		tempArray.splice(obstacle_index, 1);
		const size = (Math.random() * 80) + 40;
		const obst_speed = (Math.random() * 7) + 3;
		const newObstacle = new Obstacle(obst_speed, ((Math.random() * (window.innerWidth * 2)) + (window.innerWidth * 1.1)), ((Math.random() * (window.innerHeight - 80)) + (140 + 30)), size, size);
		tempArray.push(newObstacle);
		obstacles = tempArray;
	}

	function renderShoot(p5: p5Types) {
		for (let i = 0; i < bullets.length; i++) {
			const bullet = bullets[i];
			bullet.update();
			bullet.display(p5);

			if (bullet.x > window.innerWidth) {
				const tempArray = bullets;
				tempArray.splice(i, 1);
				// setBullets(tempArray);
				bullets = tempArray;
			} else {
				for (let j = 0; j < obstacles.length; j++) {
					const obstacle = obstacles[j];
					if (bullet.x - bullet.w / 2 >= obstacle.x - obstacle.w &&
						bullet.y - bullet.h / 2 <= obstacle.y + obstacle.h / 2 && bullet.y + bullet.h / 2 >= obstacle.y - obstacle.h / 2) {
						const tempArray = bullets;
						tempArray.splice(i, 1);
						// setBullets(tempArray);
						bullets = tempArray;
						obstacleDespawn(j);
						// hitsound.play();
						// setScore(score + 100);
						score = score += 100;
						setScore(score)
						break;
					}
				}
			}
		}
	}

	const renderObst = (p5: p5Types) => {
		for (let i = 0; i < obstacles.length; i++) {
			const obstacle = obstacles[i];
			obstacle.update();
			obstacle.display(p5);

			if (obstacle.x - obstacle.w / 2 <= player.x_front && obstacle.x + obstacle.w / 2 >= player.x_back && player.y_top <= obstacle.y + obstacle.h / 2 && player.y_bot >= obstacle.y - obstacle.h / 2) {
				obstacleDespawn(i);
				// damagesound.play();
				lives--;
				setLives(lives);
				// game_screen = <StatScreen lives={livesState} />;
				if (lives === 0) {
					obstacles = [];
					bullets = [];
					setGameState("stopped");
					game_screen = <GameOverScreen />;
					p5.background("#222222");
				}
			} else if (obstacle.x < 0) {
				obstacleDespawn(i);
			}
		}
	}

	/////////////
	//controls//
	////////////

	const keyPressed = (p5: p5Types) => {
		switch (p5.keyCode) {
			case 87:
				// Up
				if (gameState === "running") {
					player.direction = "up";
				}
				break;
			case 83:
				// Down
				if (gameState === "running") {
					player.direction = "down";
				}
				break;
			case 66:
				// Shoot
				if (gameState === "running") {
					const bullet = new Bullet(6, player.x_front, player.y_mid, 10, 10);
					const tempArray = bullets;
					tempArray.push(bullet);
					bullets = tempArray;
				}
				break;
			case 13:
				init(p5);
				break;
			case 80:
				pause(p5);
				break;
			default:
				break;
		}
	}

	function keyReleased(event: any) {
		switch (event.keyCode) {
			case 87:
			case 83:
				player && (player.direction = "none");
				break;
			default:
				break;
		}
	}

	return (
		<React.Fragment>
			<Sketch setup={setup} draw={draw} keyPressed={keyPressed} keyReleased={keyReleased} />
			{game_screen}
		</React.Fragment>
	)
}

export default Asterisk;

// async const leaderscreen = (new_user: string, new_score: number) => {
// 	let leader_array = await fetch_leader('leaderboard.json');
// 	if (new_score != null) {
// 		if (new_user.length === 0) {
// 			return false;
// 		} else {
// 			if (new_user.length != 3) {
// 				new_user = new_user + "-".repeat(3 - new_user.length);
// 			}
// 			let new_entry = JSON.stringify({
// 				user: new_user,
// 				score: new_score
// 			})
// 			fetch('leaderboard.php', {
// 				method: 'post',
// 				headers: {
// 					'Accept': 'application/json, text/plain, */*',
// 					'Content-Type': 'application/json'
// 				},
// 				body: new_entry,
// 			}).then(res => res.json())
// 				.then(res =>  (res));
// 			leader_array.push({
// 				"user": new_user,
// 				"score": new_score
// 			});
// 			document.getElementById("bootscreen").innerHTML = "<h1>Game Over. Press Enter to play Again.</h1> <h2>Submission Successful!</h2>"
// 		}
// 	}
// 	leader_array.sort((a, b) => {
// 		return b.score - a.score;
// 	});
// 	let table = document.createElement("table");
// 	let thead = document.createElement("thead");
// 	let tbody = document.createElement("tbody");
// 	thead.innerHTML = "<tr><th>User</th><th>Score</th></tr>";
// 	table.appendChild(thead);
// 	table.appendChild(tbody);
// 	document.getElementById("bootscreen").appendChild(table)
// 	for (let i = 0; i < leader_array.length && i < 5; i++) {
// 		let tr = document.createElement("tr");
// 		tr.innerHTML = "<td>" + leader_array[i].user + "</td>" + "<td>" + leader_array[i].score + "</td>"
// 		tbody.appendChild(tr);
// 	}
// }

// const submitScore = () => {
	// document.getElementById("bootscreen").innerHTML = "<h1>Game Over. Press Enter to play Again.</h1> <h2>Your Final Score:</h2>" +
	// 	"<form onsubmit='leaderscreen(this.user.value, this.score.value);return false;'> <input id='score' type='text' name='score' value='" + score +
	// 	"' readonly> <span id='user-input'><input type='text' name='user' placeholder='Your Username' maxlength='3'> <button type='submit' value='Submit'><i class='fas fa-caret-square-right fa-4x'></i></button><span> </form>";
	// document.getElementById("bootscreen").style.display = "block";
	// document.getElementById("bootscreen").style.gridRow = "1 / 4";
	// document.getElementById("bootscreen").style.alignSelf = "center";

	// document.getElementById("lives").innerHTML = "GAMEOVER. PRESS ENTER TO PLAY AGAIN.";
	// document.getElementById("score").innerHTML = "YOUR FINAL SCORE IS " + score + " POINTS.";
	// leaderscreen(null, null);
// }


/* Changelog:
Current Version:
ver 1.03:
Revised to work when hosted on a React Application
Cleaned and Trimmed Code

Previous Versions:
ver 1.02:
Added leader board functionality

ver 1.01: 
Performance upgrades
Added pause and hide feature */