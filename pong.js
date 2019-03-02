<!DOCTYPE html>
<html>
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.1/p5.min.js"></script>
<style>
  html, body {
    margin: 0;
    padding: 0;
  }
</style>
<meta charset="utf-8" />
</head>
<body>
<script>




// The ball or puck
var puck = {
  x: 200,
  y: 200,
  vx: -3,
  vy: -1,
  size: 10,
}

var leftY = 200; // Left hand side player
var rightY = 100; // Right hand side player
var playerWidth = 25;
var playerHeight = 75;
var playerSpeed = 7;
var leftScore = 0;
var rightScore = 0;
var pointValue = 1;



function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);

    line(width/2, 0, width/2, height);

    // Draw left score
    text(leftScore, 100, 50);

    // Draw right score
    text(rightScore, 300, 50);

    // Draw the puck
    ellipse(puck.x, puck.y, puck.size, puck.size)

    // Draw left player
    rectMode(CORNER);
    rect(0, leftY, playerWidth, playerHeight)

    // Draw right player
    rect(width - playerWidth-1, rightY, playerWidth, playerHeight);

    // Update puck position
    puck.x += puck.vx;
    puck.y += puck.vy;

    // Check if puck hits the top or bottom
    if (puck.y < 0 || puck.y > height) {
      puck.vy = puck.vy * -1;
    }

    // Check if right player scored
    if (puck.x < 0) {
      text ("Point for Player Right!", 145, 350);
      rightScore++;
      puck.x = 200;
      puck.y = 200;
      puck.vx = puck.vx * -1;
      puck.vy = puck.vy * -1;
    }

    // Check if left player scored
    if (puck.x > width) {
      text ("Point for Player Left!", 148, 350);
      leftScore++;
      puck.x = 200;
      puck.y = 200;
      puck.vx = puck.vx * -1;
      puck.vy = puck.vy * -1;
    }

    // Check if puck hitting left paddle
    if (puck.x < playerWidth) {
      if (puck.y > leftY && puck.y < leftY + playerHeight) {
        puck.vx = puck.vx * -1;
      }
    }

    // Check if puck hitting right paddle
    if (puck.x > width - playerWidth) {
      if (puck.y > rightY && puck.y < rightY + playerHeight) {
        puck.vx = puck.vx * -1;
      }
    }

    // Read input to update play positions
    if (keyIsDown(UP_ARROW)) {
      rightY -= playerSpeed;
    }

    if (keyIsDown(DOWN_ARROW)) {
      rightY += playerSpeed;
    }

    // 65 is A
    if (keyIsDown(65)) {
      leftY -= playerSpeed;
    }

    // 90 is Z
    if (keyIsDown(90)) {
      leftY += playerSpeed;
    }

    // Constrain paddles to the screen
    if (leftY < 0) {
      leftY = 0;
    }

    if (rightY < 0) {
      rightY = 0;
    }

    if(leftY > height - playerHeight) {
      leftY = height - playerHeight;
    }

    if (rightY > height - playerHeight) {
      rightY = height - playerHeight;
    }

    // Check if right player wins
    if (rightScore == 10) {
      text ("Player Right Wins!", 145, 350);
      rightScore = 0;
      leftScore = 0;
    }

    // Check if left player wins
    if (leftScore == 10) {
      text ("Player Left Wins!", 145, 350);
      leftScore = 0;
      rightScore = 0;
    }
}

</script>
</body>
</html>
