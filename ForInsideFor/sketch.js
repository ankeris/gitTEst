function setup() {
 createCanvas(600, 400);
}


function draw() {
background(0);

	strokeWeight(3);
	stroke(255,255,0);

	
for (var x = 0; x < mouseX; x += 60) {
	for (var y = 0; y <= mouseY; y += 40){
	ellipse(x, y, 25, 25)
	fill(random(255), 0, random(255));
		}
	}
}

