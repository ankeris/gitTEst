var points = 0;
function pointsCounter(){
	text(points, 10, 30);
	fill(255);
}

var playBall = new Ball(55, 155);
var playRect = new Rectangle(160, 250, 50, 10, 2, 2);

function setup(){
	createCanvas(260,260);
}

function draw(){
	
	background(100);
	fill(255);
	textSize(16);
	text("controll with right/left arrow", 10, 50);
	fill(22,180,200);
	textSize(22);
	pointsCounter();
//----- ball properties
	playBall.display();
	playBall.move();
	playBall.ballWallHit();
	playBall.bounceOfRectangle();

//----- rectangle properties
	playRect.displayRect();
	playRect.keyPressed();
	playRect.fixed();
	
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
	this.keyPressed = function(){
		if (keyCode == RIGHT_ARROW) {
		this.x = this.x + this.xspeed;
		} 
		else if (keyCode == LEFT_ARROW) {
		this.x = this.x - this.xspeed;
		}
	}

	// if ball hits the wall it stops
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
    	if (this.y > 240 && this.x < playRect.x + playRect.w/2 && this.x > playRect.x - playRect.w/2){
    		this.yspeed = this.yspeed * -1;
    		//adds +1 point on hit
    		points = points + 1;
    	}

    	if (this.y > 280) {
    		this.yspeed = 0;
    		points = points + "  Good luck next time!";
    		fill(255,0,0);
    	}
    }
}
