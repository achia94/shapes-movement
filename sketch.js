var circle = {
	x:0,
	y:200,
	diameter:50,
};

var circle2 = {
	x:0,
	y:300,
	diameter:150,
};

var r = 218;
var g = 160;
var b = 221;

function setup() {
	createCanvas(600, 400);

}

function draw() {

//background
background(r, g, b);

//ellipse
//noStroke();
fill(250, 200, 200);
ellipse(circle.x, circle.y, circle.diameter, circle.diameter);

circle.x = circle.x + 1

//ellipse2
fill(250, 200, 200);
ellipse(circle2.x, circle2.y, circle2.diameter, circle2.diameter);

circle2.y = circle2.y + 1

}
