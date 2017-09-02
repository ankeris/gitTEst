var bubbles = [];

function setup() {
createCanvas(600,200)

// insert i value for the amount of figure you want

	for (var i = 0; i < 5; i++){
		bubbles[i] = {
			x: random(0, width),
			y: random(0, height),
			xspeed: 3,
			yspeed: 4,
			display: function(){
				stroke(255);
				ellipse(this.x, this.y, 30, 30);
			},
			ballSpeed: function() {
				this.x = this.x + this.xspeed;
				this.y = this.y + this.yspeed;
			},
			ballWallHit: function(){
				if (this.x > width || this.x < 0) {
					this.xspeed = this.xspeed * -1;
				}

				if (this.y > height || this.y < 0) {
					this.yspeed = this.yspeed * -1;
				}
			}
		}
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

