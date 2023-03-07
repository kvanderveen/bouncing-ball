const GRAVITY = 1
let radius = window.innerWidth * 0.03
let speedX = 10
let speedY = 0
let x = Math.random() * window.innerWidth
let y = radius
let hasStruckGround = false

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  noStroke()
  background(50)
  drawBall()
}

function drawBall() {
  ellipse(x, y, radius * 2)
  if (y === height - radius && !hasStruckGround) {
    hasStruckGround = true
    return
  }
  hasStruckGround = false
  x = max(min(x + speedX, width - radius), radius)
  if (x === radius || x === width - radius) speedX = -0.9 * speedX
  speedY += GRAVITY
  y = min(height - radius, y + speedY)
  if (y === height - radius) {
    speedY = -speedY
    speedX = 0.95 * speedX
  }
}

function mouseClicked() {
  resizeCanvas(windowWidth, windowHeight)
  radius = window.innerWidth * 0.03
  speedX = 10
  speedY = 0
  y = radius
  x = Math.random() * window.innerWidth
}
