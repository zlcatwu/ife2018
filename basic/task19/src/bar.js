const barWrapper = document.querySelector('#bar-wrapper');

function findMaxValue(data) {
  let max = 0;
  data.forEach((val) => {
    if (val > max) {
      max = val;
    }
  });
  return max;
}

function getSVGElement(tag) {
  return document.createElementNS('http://www.w3.org/2000/svg', tag);
}

function createLine(p1, p2, { color, width }) {
  const line = getSVGElement('line');
  line.setAttribute('x1', p1.x);
  line.setAttribute('y1', p1.y);
  line.setAttribute('x2', p2.x);
  line.setAttribute('y2', p2.y);
  line.setAttribute('stroke', color);
  line.setAttribute('stroke-width', width);
  barWrapper.appendChild(line);
}

// x, y 为柱最下方的中间点
function createBar({ x, y, width, height, color, margin }) {
  const rect = getSVGElement('rect');
  width = width - margin * 2;
  rect.setAttribute('width', width);
  rect.setAttribute('height', height);
  rect.setAttribute('x', x - width / 2);
  rect.setAttribute('y', y - height);
  rect.setAttribute('fill', color);
  barWrapper.appendChild(rect);
}

export function render({ body, product, region }) {
  const svgWidth = 300;
  const svgHeight = 300;
  const axisWidth = 200;
  const axisHeight = 200;

  const barWidth = Math.floor(axisWidth / 12);
  const barMargin = 2;

  const barColor = '#f00';
  const axisColor = '#000';

  const maxValue = findMaxValue(body);
  const param = axisHeight / maxValue;

  const marginLR = (svgWidth - axisWidth) / 2;
  const marginTB = (svgHeight - axisHeight) / 2;

  while (barWrapper.firstChild) {
    barWrapper.removeChild(barWrapper.firstChild);
  }

  createLine(
    { x: marginLR, y: marginLR + axisHeight },
    { x: marginLR + axisWidth, y: marginLR + axisHeight },
    { color: axisColor, width: 1 }
  );
  createLine(
    { x: marginLR, y: marginTB },
    { x: marginLR, y: marginTB + axisHeight },
    { color: axisColor, width: 1 }
  );
  body.forEach((val, idx) => {
    createBar({
      x: marginLR + idx * barWidth + barWidth / 2,
      y: marginTB + axisHeight,
      width: barWidth,
      height: param * val,
      color: barColor,
      margin: barMargin
    });
  });
}
