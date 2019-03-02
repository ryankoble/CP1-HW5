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
    background(0);

    for (var i = 20; i <= 390; i = i + 20) {
      for (var j = 20; j <= 390; j = j + 20) {
        ellipse(i, j, 15, 15);
      }
    }
}

</script>
</body>
</html>
