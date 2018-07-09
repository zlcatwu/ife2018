(function () {
  const radioA = document.querySelector('#radio-a');
  const radioB = document.querySelector('#radio-b');
  const inputA = document.querySelector('#num-a');
  const inputB = document.querySelector('#num-b');
  const btn1 = document.querySelector('#btn-1');
  const btn2 = document.querySelector('#btn-2');
  const btn3 = document.querySelector('#btn-3');
  const btn4 = document.querySelector('#btn-4');
  const btn5 = document.querySelector('#btn-5');
  const btn6 = document.querySelector('#btn-6');
  const btn7 = document.querySelector('#btn-7');
  const btn8 = document.querySelector('#btn-8');
  const result = document.querySelector('#result');

  function getRadio () {
    if (radioA.checked) {
      return 'A';
    } else if (radioB.checked) {
      return 'B';
    }
    throw new Error('没有单选框被选中');
  }

  function sendResult (val) {
    result.innerHTML = val;
  }

  function getInputValue (input) {
    let val = null;
    if (input === 'A') {
      val = parseFloat(inputA.value);
    } else if (input === 'B') {
      val = parseFloat(inputB.value);
    }
    if (isNaN(val)) {
      throw new Error('输入不为数字');
    }
    return val;
  }

  btn1.addEventListener('click', function () {
    try {
      const radioValue = getRadio();
      let selected = null;
      if (radioValue === 'A') {
        selected = inputA;
      } else if (radioValue === 'B') {
        selected = inputB;
      }
      sendResult(!isNaN(selected.value));
    } catch (err) {
      console.error(err.message);
    }
  });

  btn2.addEventListener('click', function () {
    try {
      const num = getInputValue('A');
      const bitCnt = getInputValue('B');
      sendResult(num.toFixed(bitCnt));
    } catch (err) {
      console.error(err.message);
    }
  });

  btn3.addEventListener('click', function () {
    try {
      const num = getInputValue(getRadio());
      sendResult(Math.abs(num));
    } catch (err) {
      console.error(err.message);
    }
  });

  btn4.addEventListener('click', function () {
    try {
      const num = getInputValue(getRadio());
      sendResult(Math.ceil(num));
    } catch (err) {
      console.error(err.message);
    }
  });

  btn5.addEventListener('click', function () {
    try {
      const num = getInputValue(getRadio());
      sendResult(Math.floor(num));
    } catch (err) {
      console.error(err.message);
    }
  });

  btn6.addEventListener('click', function () {
    try {
      const num = getInputValue(getRadio());
      sendResult(Math.round(num));
    } catch (err) {
      console.error(err.message);
    }
  });

  btn7.addEventListener('click', function () {
    try {
      const numA = getInputValue('A');
      const numB = getInputValue('B');
      sendResult(numA > numB ? numA : numB);
    } catch (err) {
      console.error(err.message);
    }
  });

  btn8.addEventListener('click', function () {
    try {
      const numA = getInputValue('A');
      const numB = getInputValue('B');
      sendResult(numA > numB ? numB : numA);
    } catch (err) {
      console.error(err.message);
    }
  });

}());
