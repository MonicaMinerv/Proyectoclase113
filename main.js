function preload() {
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();

  tint_color = "";
}

function draw() {
  image(video, 0, 0, 640, 480);
  fill(255,140,0);
  stroke(255, 140, 0);
  circle(350, 40, 70);
  circle(290, 50, 70);
  circle(410, 50, 70);
  circle(350, 80, 70);
  circle(290, 90, 70);
  circle(410, 90, 70);
  circle(230, 100, 70);
  circle(470, 100, 70);
  circle(350, 130, 70);
  circle(290, 130, 70);
  circle(410, 130, 70);
  circle(230, 140, 70);
  circle(470, 140, 70);
  fill(255,0,0);
  stroke(255, 0, 0);
  circle(350, 300, 90);

}

function take_snapshot(){    
  save('payasito.png');
}



