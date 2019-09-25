var x=0;
var c=0;

function setup() {
createCanvas(1366,768);
background(30);
frameRate(500);
}

function draw() {
  for (var i=70;i<768;i=i+70)
  {
  if (c%2==0)
  {
    stroke('#FF4444');
    point(x,(sin(x/5)*5)+i);
  }
  else
  {
    stroke('#9B51E0');
    point(x,(cos(x/5)*5)+i);
  }

  x=x+0.1;
  c++
  }
}
