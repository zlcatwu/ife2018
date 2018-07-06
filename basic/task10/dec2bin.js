const number = document.getElementById('dec-number');
const bit = document.getElementById('bin-bit');
const button = document.getElementById('trans-btn');
const result = document.getElementById('result');

function dec2bin (decNumber, bitCnt) {
  if (decNumber < 0 || bitCnt < 0) {
    return '数字必须为非负数';
  }
  if (decNumber === 0) {
    return '0';
  }
  let result = '';
  let num = decNumber;
  while (num !== 0) {
    result = (num % 2) + result;
    num = Math.floor(num / 2);
  }
  if (result.length > bitCnt) {
    console.error('个错');
  }
  while (result.length < bitCnt) {
    result = '0' + result;
  }
  return result;
}

button.addEventListener('click', function () {
  const val = number.value;
  const bitCnt = bit.value;
  result.innerHTML = dec2bin(parseInt(val), parseInt(bitCnt));
});
