var bubbles = [];

function setup() {
createCanvas(1100,200)

// insert i value for the amount of figure you want

	for (var i = 0; i < 150; i++){
		bubbles[i] = new Bubble(); 
	}
}

function draw() {
	background(55);
	for (var i = 0; i < bubbles.length; i++){
		bubbles[i].display();
		bubbles[i].ballSpeed();
		bubbles[i].ballWallHit();
	}
}

// any mouse command below

function mousePressed() {
	bubbles.push(new Bubble(mouseX, mouseY));
if (bubbles.length > 50) {
	bubbles.splice(0,1);
}
}

function Bubble(xasis, yasis) {
	this.x = xasis;
	this.y = yasis;
	this.yspeed = random(-0.1,0.2);
	this.xspeed = random(-0.1,0.2);
	this.display = function() {
		stroke(255);
		fill(random(1,55),(1,55),(1,55));
		ellipse(this.x, this.y, 30, 30);
	}
	this.ballSpeed = function(){
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;
	}
	this.ballWallHit = function(){
		if (this.x > width || this.x < 0) {
			this.xspeed = this.xspeed * -1;
		}

		if (this.y > height || this.y < 0) {
				this.yspeed = this.yspeed * -1;
		}
	}
}
