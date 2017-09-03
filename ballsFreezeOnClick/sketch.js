var bubbles = [];

function setup() {
	createCanvas(1100,200)
		for (var i = 0; i < 30; i++){
			bubbles[i] = new Bubble(random(width), random(height)); 
		}
}

function mousePressed(){
	for (var i = 0; i < bubbles.length; i++){
		bubbles[i].clicked();
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

function mouseDragged() {
	bubbles.push(new Bubble());
	if (bubbles.length > 50) {
		bubbles.splice(0,1);
	}
}
