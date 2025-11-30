function setup() {
  createCanvas(600, 400);
  noStroke();
  background(180);

  fill(250, 250, 255, 240);
  triangle(0, 0, width, 0, width, height);

  fill(115, 123, 132);   
  triangle(0, height, 90, 230, 195, height);
  fill(80, 103, 115);
  triangle(60, height, 135, 250, 250, height);
  fill(145, 150, 160);
  triangle(130, height, 175, 276, 300, height);

  fill(100, 110, 130, 195);
  triangle(185, height, 245, 255, 360, height);

  fill(210, 210, 225, 180); 
  triangle(90, 230, 120, 250, 135, 250);
  fill(235, 237, 245, 180);
  triangle(175, 276, 200, 260, 250, 276);
  fill(230, 233, 252, 140);
  triangle(245, 255, 275, 265, 300, height);
  

  for (let i = 0; i < 4; i++) {
    fill(255, 234 + i * 9, 80 + i * 42, 210 - i * 40);
    ellipse(410 + i * 46, 78 + i * 34, 35 + i * 12, 35 + i * 12);
  }

  for (let j = 0; j < 6; j++) {
    fill(255, 255, 242, 43 - j * 6);
    ellipse(width - 60 - j * 13, 68 + j * 11, 65 - j * 8, 31 + j * 5);
  }

  stroke(215, 210, 130);
  strokeWeight(9);
  line(0, height, width, 0);
}
