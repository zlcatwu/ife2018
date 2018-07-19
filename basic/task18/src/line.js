const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

// 折线图参数
const canvasHeight = 300;
const canvasWidth = 300;

const picHeight = 200;
const picWidth = 200;
const dotRadius = 2.5;
const lineWidth = 2;
const lineMargin = picWidth / 12;

const marginTB = Math.floor((canvasHeight - picHeight) / 2);
const marginLR = Math.floor((canvasWidth - picWidth) / 2);

function findMax(data) {
  let max = 0;
  for (const d of data) {
    if (d > max) {
      max = d;
    }
  }
  return max;
}

function drawAxis({ lengthX, lengthY, lineWidth = 1 }) {
  ctx.save();
  ctx.lineWidth = lineWidth;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(lengthX, 0);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -lengthY);
  ctx.stroke();
  ctx.restore();
}

function drawDot({ x, y, radius }) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawDots({ data, param, lineMargin, radius, color }) {
  ctx.save();
  ctx.fillStyle = color;
  let offsetX = 0;
  for (const d of data) {
    offsetX += lineMargin;
    const offsetY = d * param;
    drawDot({
      x: offsetX,
      y: -offsetY,
      radius,
      color
    });
  }
  ctx.restore();
}

function drawLine({ data, param, lineMargin, color, lineWidth = 1 }) {
  ctx.save();
  ctx.lineWidth = lineWidth;
  ctx.lineJoin = 'round';
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  let offsetX = 0;
  ctx.beginPath();
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    offsetX += lineMargin;
    const offsetY = d * param;
    if (i === 0) {
      ctx.moveTo(offsetX, -offsetY);
    } else {
      ctx.lineTo(offsetX, -offsetY);
    }
  }
  ctx.stroke();
  ctx.restore();
}

function clearCanvas() {
  ctx.save();
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  ctx.restore();
}

export function renderAll(data) {
  const colors = ['#f00', '#0f0', '#00f', '#0ff', '#f0f', '#ff0', '#aaf', '#faa', '#afa'];
  ctx.save();
  clearCanvas();
  let maxVal = 0;
  data.forEach((item, idx) => {
    const itemMaxVal = findMax(item.body);
    if (itemMaxVal > maxVal) {
      maxVal = itemMaxVal;
    }
  });
  const param = picHeight / maxVal;
  ctx.translate(marginLR, marginTB + picHeight);
  drawAxis({
    lengthX: picWidth,
    lengthY: picHeight
  });
  data.forEach((item, idx) => {
    drawDots({
      data: item.body,
      param,
      lineMargin,
      radius: dotRadius,
      color: colors[idx],
    });
    drawLine({
      data: item.body,
      param,
      lineMargin,
      color: colors[idx],
      lineWidth,
    });
  });
  ctx.restore();
}

// 绘制单条折线图
export function render({ body, product, region, color = '#000'}) {
  const maxVal = findMax(body);
  const param = picHeight / maxVal;

  ctx.save();
  clearCanvas();
  ctx.translate(marginLR, marginTB + picHeight);
  drawAxis({
    lengthX: picWidth,
    lengthY: picHeight
  });
  drawDots({
    data: body,
    param,
    lineMargin,
    radius: dotRadius,
    color: color,
  });
  drawLine({
    data: body,
    param,
    lineMargin,
    color: color,
    lineWidth,
  });
  ctx.restore();
}
