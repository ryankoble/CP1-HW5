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
    for (var i = 5; i <= 395; i = i + 5) {
      line(i, 0, i, i * 2);
    }
  }

</script>
</body>
</html>
