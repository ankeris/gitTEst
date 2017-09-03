function setup() {
 createCanvas(600, 400);
}

var lightOn = true;
 function draw() {
   if (lightOn) {
     fill(255,255,0); background(255);
   } else {
     fill(0); background(123);
  }

  rect(260,160,80,80);
  noFill();
  stroke(1);
  strokeWeight(4);
}

function mousePressed() {
 lightOn = !lightOn;
}
