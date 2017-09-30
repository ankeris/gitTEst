var points = 0;
var myCanvas;
var balls = [];
var playRect;
var startGame = "Press here to spawn a ball";

function pointsCounter(){
	textAlign(LEFT);
	text(points, 10, 30);
	textSize(12);
	textAlign(CENTER);
	text(startGame, width/2, height/2);
	fill(255);
}

function setup(){
	myCanvas = createCanvas(260,260);
	playRect = new Rectangle(160, 250, 50, 10, 2, 2);
}

// Ball appears;
function mousePressed() {
	if (balls.length < 3){
		balls.push(new Ball(mouseX, mouseY));
	}
	startGame = "";
}


function draw(){
	background(100);
	fill(255);
	textSize(16);
	textAlign(LEFT);
	text("control with right/left arrow", 10, 50);
	fill(22,180,200);
	textSize(22);
	pointsCounter();

	playRect.displayRect();
	playRect.keyIsDown();
	playRect.fixed();
	for (var i = 0; i < balls.length; i++){
		balls[i].display();
		balls[i].move();
		balls[i].ballWallHit();
		balls[i].bounceOfRectangle();
	}
}

function Rectangle(xas, yas, w, h, xspeed, yspeed){
	this.x = xas;
	this.y = yas;
	this.w = w;
	this.h = h;
	this.xspeed = xspeed;
	this.yspeed = yspeed;
	this.stop = 0;
	this.displayRect = function(){
	rectMode(CENTER);
	fill(125,220,10);
	rect(this.x, this.y, w, h);
	}

	// movement by arrows
	this.keyIsDown = function(){
		if (keyIsDown(RIGHT_ARROW)) {
		this.x = this.x + this.xspeed;
		} 
		else if (keyIsDown(LEFT_ARROW)) {
		this.x = this.x - this.xspeed;
		}
	}

	// if rectangle hits the wall it stops
	this.fixed = function(){
		this.x = constrain(this.x, 25, width-25);
	}
}


function Ball(x, y){
	this.x = x;
	this.y = y;
	this.xspeed = -2;
	this.yspeed = -3;
	this.r = 20;
	this.display = function() {
        fill(255);
        ellipse(this.x, this.y, this.r, this.r);
    }
    // speed of the ball
    this.move = function() {
    	this.x = this.x + this.xspeed;
    	this.y = this.y + this.yspeed;
    	console.log(this.y);
    }
    // if it hits the wall it goes other direction
    this.ballWallHit = function(){
    	if (this.x > width || this.x <= 0){
    		this.xspeed = this.xspeed * -1;
    	}
    	if (this.y < 5) {
    		this.yspeed = this.yspeed * -1;
    	}
    }

    // when Ball hits the rectangle it bounces back and gets the point
    this.bounceOfRectangle = function(){
    	if ((this.y == 240 ||this.y == 241 ||this.y == 242) && this.x < playRect.x + playRect.w/2 && this.x > playRect.x - playRect.w/2){
    		this.yspeed = this.yspeed * -1;

    		//adds +1 point on hit
    		points = points + 1;
    	}

    	if (this.y > 290) {
    		balls.splice(0,balls.length);
    		points = 0;
    		fill(255,0,0);
    	}
    }
}


    	