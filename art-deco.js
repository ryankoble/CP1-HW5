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

  function setup() {
    createCanvas(400, 400);
  }

  function draw() {
    background(220);

    for (var i = 15; i <= 60; i = i + 15) {
      for (var j = 50; j <= 350; j = j + 75) {
        rectMode(CENTER);
        noFill();
        rect(j, 200, i, i);
      }
    }
}

</script>
</body>
</html>
