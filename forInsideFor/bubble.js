function Bubble(xas, yas) {
	this.x = xas;
	this.y = yas;
	this.r = 48;
	this.col = color(150,170,155);
	this.changeColor = function(){
		this.col = color(random(0,255),random(0,255),random(0,255));
	}	
	this.intersect = function(other) {
		var d = dist(this.x, this.y, other.x, other.y);
		if (d < this.r + other.r) {
			return true;
		} else {
			return false;
		}
	}

	this.display = function() {
		stroke(220);
		fill(this.col);
		ellipse(this.x, this.y, this.r * 2, this.r * 2);
	}
	this.move = function() {
		this.x = this.x + random(-1, 1);
		this.y = this.y + random(-1, 1);
	}

}