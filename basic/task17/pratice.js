(function () {
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');

  function drawLine (x1, y1, x2, y2) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
  }

  function drawRect (x, y, width, height) {
    ctx.fillRect(x, y, width, height);
  }

  function drawCircle (x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
  }

  function drawText (text, x, y) {
    ctx.fillText(text, x, y);
  }

  function drawClock () {
    ctx.save();
    ctx.strokeRect(0, 0, 200, 100);
    ctx.strokeRect(25, 25, 150, 50);
    ctx.font = '48px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('12:33', 100, 70);
    ctx.restore();
  }

  function drawCloud () {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.quadraticCurveTo(75, 25, 100, 50);
    ctx.quadraticCurveTo(125, 25, 150, 50);
    ctx.quadraticCurveTo(175, 25, 200, 50);
    ctx.quadraticCurveTo(225, 75, 200, 100);
    ctx.quadraticCurveTo(175, 125, 150, 100);
    ctx.quadraticCurveTo(125, 125, 100, 100);
    ctx.quadraticCurveTo(25, 100, 50, 50);
    ctx.stroke();
    ctx.restore();
  }

  drawLine(0, 0, 100, 100);
  ctx.translate(100, 0);
  drawRect(0, 0, 100, 100);
  ctx.translate(100, 0);
  drawCircle(50, 50, 50);
  ctx.translate(100, 0);
  drawText('嘿', 25, 25);
  ctx.translate(100, 0);
  drawClock();
  ctx.translate(200, 0);
  drawCloud();
}());
