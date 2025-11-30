let pupilOffsetX = 0;
let pupilOffsetY = 0;
let blushAlpha = 150;

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
}

function draw() {
  background(240, 230, 220);

  pupilOffsetX = map(mouseX, 0, width, -5, 5);
  pupilOffsetY = map(mouseY, 0, height, -3, 3);

  if (mouseIsPressed) {
    blushAlpha = 220;
  } else {
    blushAlpha = 150;
  }

  stroke(0);
  strokeWeight(2);
  fill(255, 224, 189);
  ellipse(300, 210, 200, 240);

  fill(80, 40, 20);
  noStroke();
  arc(300, 160, 220, 180, PI, TWO_PI);

  stroke(80, 40, 20);
  strokeWeight(3);
  line(260, 165, 285, 160);
  line(315, 160, 340, 165);

  stroke(0);
  strokeWeight(2);

  if (keyIsPressed && (key === 'w' || key === 'W')) {
    noFill();
    strokeWeight(3);
    arc(275, 190, 45, 20, 0, PI);
  } else {
    fill(255);
    strokeWeight(2);
    ellipse(275, 190, 45, 35);
    fill(0);
    ellipse(275 + pupilOffsetX, 190 + pupilOffsetY, 18, 18);
  }

  fill(255);
  strokeWeight(2);
  ellipse(325, 190, 45, 35);
  fill(0);
  ellipse(325 + pupilOffsetX, 190 + pupilOffsetY, 18, 18);

  strokeWeight(3);
  stroke(0);
  line(300, 205, 300, 235);
  point(295, 230);
  point(305, 230);

  noFill();
  strokeWeight(4);
  stroke(220, 50, 50);
  arc(300, 260, 70, 40, 0, PI);

  noStroke();
  fill(255, 180, 180, blushAlpha);
  ellipse(240, 235, 40, 25);
  ellipse(360, 235, 40, 25);

  fill(200, 200, 255);
  stroke(0);
  strokeWeight(2);
  triangle(250, 320, 350, 320, 300, 300);

  fill(255);
  triangle(260, 320, 295, 305, 290, 350);
  triangle(340, 320, 305, 305, 310, 350);
}