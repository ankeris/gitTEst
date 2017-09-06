var bubbles = [];

function setup() {
	createCanvas(600, 400);

	for (var i = 0; i < 15; i++){
		bubbles[i] = new Bubble(random(width),random(height));
	}
}

function draw(){
	background(50);
	for (var i = 0; i < bubbles.length; i++){
		bubbles[i].move();
		bubbles[i].display();

		for (var j = 0; j < bubbles.length; j++){
			if (i != j && bubbles[i].intersect(bubbles[j])) {
				bubbles[i].changeColor();
				bubbles[j].changeColor();
			}
		}
	}
}
