const RADIUS = window.innerWidth * 0.03
let speedX = 5
let speedY = 0
let y = RADIUS
let x = Math.random() * window.innerWidth

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  noStroke()
  background(50)
  ellipse(x, y, RADIUS * 2)
  calculatePosition()
}

function calculatePosition() {
  x = max(min(x + speedX, width - RADIUS), RADIUS)
  if (x === RADIUS || x === width - RADIUS) speedX = -0.9 * speedX
  speedY += 1
  y = min(height - RADIUS, y + speedY)
  if (y === height - RADIUS) {
    speedY = -speedY
    speedX = 0.9 * speedX
  }
}
