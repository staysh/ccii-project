function setup () {
	createCanvas(400, 400);
	background(255, 0, 0);
	fill(255);
	ellipse(width/2, height/2, 100, 100);
}

function draw () {
	fill(random(255), random(255), 0);
	ellipse(random(width), random(height), 100, 100);
}
