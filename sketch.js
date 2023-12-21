let noiseTime = 0;
let noiseTam = 10;
let noiseCol = 0;

let osc, playing, freq, amp;
let t;

function setup() {
  createCanvas(windowWidth, windowHeight);
  osc = new p5.Oscillator("sine");
  osc.start();
}

function draw() {
  // background(255);
  let posX1 = map(noise(noiseTime), 0, 1, 0, windowWidth);
  let posY1 = map(noise(noiseTime + 100), 0, 1, 0, windowHeight);

  let R1 = map(noise(noiseCol), 0, 1, 255, 60);
  let G1 = map(noise(noiseCol + 100), 0, 1, 255, 90);
  let B1 = map(noise(noiseCol + 50), 0, 1, 255, 80);

  let tam1 = map(noise(noiseTam), 0, 1, 80, 5);

  let colur1 = color(R1, G1, B1);

  noiseTime += 0.01;
  noiseTam += 0.06;
  noiseCol += 0.04;

  fill(colur1);
  // stroke(0, 50);
  // strokeWeight(4);
  noStroke();
  circle(posX1, posY1, tam1);

  freq = map(posX1, 0, windowWidth, 100, 300);

  amp = 0.5;

  osc.freq(freq, 0, 1);
  // Ajustar el volumen con el método osc.amp ()
  osc.amp(amp, 0.1);
  t += 0.01;

  if (mouseIsPressed) {
    osc.start();
  } else {
    osc.stop();
  }
}
