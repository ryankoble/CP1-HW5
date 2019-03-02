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
    for (var i = 0; i <= 200; i = i + 10) {
      line(200 - i, i, 200 + i, i);
      line(200 - i, 400 - i, 200 + i, 400 - i);
    }
  }

</script>
</body>
</html>
