
var playBall = new Ball(55, 155);
var playRect = new Rectangle(200,385);
function setup(){
	createCanvas(400,400);
}

function draw(){
	background(100);
	playBall.display();
	playBall.move();
	playBall.ballWallHit();
	playBall.bounceOfRectangle();
//-----
	playRect.displayRect();
	playRect.keyPressed();
}

function Rectangle(xas, yas){
	this.x = xas;
	this.y = yas;
	this.displayRect = function(){
	rectMode(CENTER);
	fill(125,220,10);
	rect(this.x, this.y, 100, 10);
	}
	this.keyPressed = function(){
		if (keyCode == UP_ARROW) {
		this.x = this.x + 2;
		} 
		else if (keyCode == DOWN_ARROW) {
		this.x = this.x - 2;
		}
		if (this.x >= 350){
			this.x = 350;
		} else if (this.x <= 50) {
			this.x = 50;
		}
	}
}

function Ball(x, y){
	this.x = x;
	this.y = y;
	this.xspeed = -3;
	this.yspeed = -3;
	this.r = 50;
	this.display = function() {
        fill(255);
        ellipse(this.x, this.y, this.r, this.r);
    }
    this.move = function() {
    	this.x = this.x + this.xspeed;
    	this.y = this.y + this.yspeed;
    }
    this.ballWallHit = function(){
    	if (this.x > width || this.x <= 0){
    		this.xspeed = this.xspeed * -1;
    	}
    	if (this.y < 5) {
    		this.yspeed = this.yspeed * -1;
    	}
    }
    this.bounceOfRectangle = function(){
    	if (this.y <= 385 && dist(this.x,this.y,playRect.x,playRect.y) <= 60){
    		this.yspeed = this.yspeed * -1;
    	}
    }
}
