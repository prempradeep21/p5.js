var r;
var g;
var b;
var a;
var b;
var bl;
var delta = 40;
var rad;

function setup() {
createCanvas(1366,768);
background(30);
}

function draw() {
  r = map(mouseX,0,1366,0,255);
  g = map(mouseY,0,768,0,255);
  bl = random(10,255);
  rad = random(10,100);
  a = random(mouseX-delta,mouseX+delta);
  b = random(mouseY-delta,mouseY+delta);
  noStroke();
  fill(r,g,bl);
  ellipse(a,b,rad,rad);
}
