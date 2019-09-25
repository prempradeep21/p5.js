var div=200;
var r;
var t=2;

function setup () {
  createCanvas(windowWidth, windowHeight);
  r = width/5;
}

function fasak(index,div) {
  var angle = map(index % div, 0, div, 0, TWO_PI);
  var v = p5.Vector.fromAngle(angle+PI,r);
  return v;
}

function draw () {
background(40);
translate(width/2,height/2);
t+=0.015;

//outer circle
noFill();
stroke('#FF0000');
circle(0,0,2*r);
//----------

//connecting lines
for (var i=0;i<div;i++)
{
var a = fasak(i,div);
var b = fasak(i*t,div);
strokeWeight(2);
if (i%2==0)
stroke('#FF0000');
else stroke('#4285F4');
line(a.x,a.y,b.x,b.y);
}
//----------
}
