function setup() {
 createCanvas(300, 300);
}

function draw() {
	background(0);
	ballDisplay();
	bounceOnWallHit();
	ballSpeed();
}

var ball = {
	x: 150,
	y: 0,
	xspeed: 6,
	yspeed: 5
}
function ballDisplay() {	
	strokeWeight(3);
	stroke(255,255,0);
	fill(random(10,255),random(15,255),0)
	ellipse(ball.x, ball.y, 25,25);
}
function bounceOnWallHit() {
		if (ball.x > width || ball.x < 0) {
		ball.xspeed = ball.xspeed * -1;
	}

	if (ball.y > width || ball.y < 0) {
		ball.yspeed = ball.yspeed * -1;
	}
}
function ballSpeed() {
	ball.x = ball.x + ball.xspeed;
	ball.y = ball.y + ball.yspeed;
}

