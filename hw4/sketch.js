let bgBaseColor = 180;
let meteors = [];

function setup() {
  createCanvas(600, 400);
  noStroke();
  
  colorMode(RGB); 

  for (let i = 0; i < 3; i++) {
    meteors.push(createMeteor());
  }
}

function draw() {
  let currentTime = millis(); 
  
  let time = frameCount * 0.02;
  let bgChange = sin(time) * 40;
  let currentBgColor = bgBaseColor + bgChange;

  background(currentBgColor);

  fill(250, 250, 255, 240 + bgChange * 0.5);
  triangle(0, 0, width, 0, width, height);

  drawMountains();

  let sizePulse = sin(frameCount * 0.05) * 5;
  
  for (let i = 0; i < 4; i++) {
    let moveX = sin(time + i) * 5;
    let moveY = cos(time + i * 0.5) * 3;
    
    fill(255, 234 + i * 9, 80 + i * 42, 210 - i * 40);
    
    let baseSize = 35 + i * 12;
    ellipse(410 + i * 46 + moveX, 78 + i * 34 + moveY, baseSize + sizePulse, baseSize + sizePulse);
  }

  for (let j = 0; j < 6; j++) {
    let alphaVal = map(bgChange, -40, 40, 20, -20);
    fill(255, 255, 242, 43 - j * 6 + alphaVal);
    ellipse(width - 60 - j * 13, 68 + j * 11, 65 - j * 8, 31 + j * 5);
  }
  
  for (let k = 0; k < meteors.length; k++) {
    drawMeteor(meteors[k]);
  }

  stroke(215, 210, 130);
  strokeWeight(9);
  line(0, height, width, 0);
  noStroke();
}

function createMeteor() {
  return {
    x: random(width, width + 200), 
    y: random(-150, -50),           
    spX: random(-6, -4),       
    spY: random(3, 6),      
    size: random(8, 12),
  };
}

function drawMeteor(m) {
  let c1 = color(255, 255, 0);
  let c2 = color(255, 50, 50);
  
  let mixRatio = (sin(frameCount * 0.1) + 1) / 2; 
  let finalColor = lerpColor(c1, c2, mixRatio);

  for(let i = 0; i < 5; i++){
    fill(red(finalColor), green(finalColor), blue(finalColor), 150 - i * 30);
    push();
    translate(m.x - m.spX * i * 2, m.y - m.spY * i * 2);
    rotate(frameCount * 0.1);
    myStar(0, 0, 4, 10, 5); 
    pop();
  }
  
  push();
  translate(m.x, m.y);
  rotate(frameCount * 0.05); 
  fill(finalColor);
  myStar(0, 0, m.size / 2, m.size, 5); 
  pop();
  
  m.x += m.spX;
  m.y += m.spY;
  
  if (m.y > height + 100 || m.x < -100) {
    if(random(1) < 0.02) { 
       m.x = random(width, width + 300);
       m.y = random(-200, -50);
       m.spX = random(-6, -4);
       m.spY = random(3, 6);
    }
  }
}

function myStar(x, y, r1, r2, points) {
  let angle = TWO_PI / points;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * r2;
    let sy = y + sin(a) * r2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * r1;
    sy = y + sin(a + halfAngle) * r1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function drawMountains() {
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
}