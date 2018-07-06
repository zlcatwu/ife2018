const result = document.getElementById('result');
const first = document.getElementById('first-number');
const second = document.getElementById('second-number');

function getNum () {
  const num1 = parseFloat(first.value);
  const num2 = parseFloat(second.value);
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error('输入不全为数字');
  }
  return [num1, num2];
}

function sendResult (val) {
  result.innerHTML = val;
}

function add () {
  try {
    const [num1, num2] = getNum();
    sendResult(num1 + num2);
  } catch (err) {
    console.log(`出现错误: ${err.message}`);
    sendResult('ERROR');
  }
}

function minus () {
  try {
    const [num1, num2] = getNum();
    sendResult(num1 - num2);
  } catch (err) {
    console.log(`出现错误: ${err.message}`);
    sendResult('ERROR');
  }
}

function times () {
  try {
    const [num1, num2] = getNum();
    sendResult(num1 * num2);
  } catch (err) {
    console.log(`出现错误: ${err.message}`);
    sendResult('ERROR');
  }
}

function divide () {
  try {
    const [num1, num2] = getNum();
    if (num1 === 0) {
      throw new Error('被除数为0');
    }
    sendResult(num1 + num2);
  } catch (err) {
    console.log(`出现错误: ${err.message}`);
    sendResult('ERROR');
  }
}
