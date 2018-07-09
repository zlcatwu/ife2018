(function () {
  const radioA = document.querySelector('#radio-a');
  const radioB = document.querySelector('#radio-b');
  const strA = document.querySelector('#str-a');
  const strB = document.querySelector('#str-b');
  const numA = document.querySelector('#num-a');
  const numB = document.querySelector('#num-b');
  const btn1 = document.querySelector('#btn-1');
  const btn2 = document.querySelector('#btn-2');
  const btn3 = document.querySelector('#btn-3');
  const btn4 = document.querySelector('#btn-4');
  const btn5 = document.querySelector('#btn-5');
  const btn6 = document.querySelector('#btn-6');
  const btn7 = document.querySelector('#btn-7');
  const btn8 = document.querySelector('#btn-8');
  const btn9 = document.querySelector('#btn-9');
  const btn10 = document.querySelector('#btn-10');
  const btn11 = document.querySelector('#btn-11');
  const btn12 = document.querySelector('#btn-12');
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

  function getStrValue (input) {
    if (input === 'A') {
      return strA.value;
    } else if (input === 'B') {
      return strB.value;
    }
  }

  function getNumValue (input) {
    if (input === 'A') {
      return numA.value;
    } else if (input === 'B') {
      return numB.value;
    }
  }

  btn1.addEventListener('click', function () {
    try {
      const str = getStrValue(getRadio());
      sendResult(str.length);
    } catch (err) {
      console.error(err.message);
    }
  });

  btn2.addEventListener('click', function () {
    try {
      const str = getStrValue(getRadio());
      sendResult(str.substr(2, 1));
    } catch (err) {
      console.error(err.message);
    }
  });

  btn3.addEventListener('click', function () {
    try {
      const str1 = getStrValue('A');
      const str2 = getStrValue('B');
      sendResult(str1.concat(str2));
    } catch (err) {
      console.error(err.message);
    }
  });

  btn4.addEventListener('click', function () {
    try {
      const str1 = getStrValue('A');
      const str2 = getStrValue('B');
      sendResult(str1.indexOf(str2));
    } catch (err) {
      console.error(err.message);
    }
  });

  btn5.addEventListener('click', function () {
    try {
      const str1 = getStrValue('A');
      const str2 = getStrValue('B');
      sendResult(str2.lastIndexOf(str1));
    } catch (err) {
      console.error(err.message);
    }
  });

  btn6.addEventListener('click', function () {
    try {
      const str = getStrValue(getRadio());
      const num1 = getNumValue('A');
      const num2 = getNumValue('B');
      sendResult(str.slice(num1, num2));
    } catch (err) {
      console.error(err.message);
    }
  });

  btn7.addEventListener('click', function () {
    try {
      const str = getStrValue(getRadio());
      let cnt = 1;
      for (c of str) {
        console.log(c);
        if (c === '\n') {
          cnt++;
        }
      }
      sendResult(cnt);
    } catch (err) {
      console.error(err.message);
    }
  });

  btn8.addEventListener('click', function () {
    try {
      const str = getStrValue(getRadio());
      const num1 = getNumValue('A');
      const num2 = getNumValue('B');
      sendResult(str.substr(num1, num2));
    } catch (err) {
      console.error(err.message);
    }
  });

  btn9.addEventListener('click', function () {
    try {
      const str = getStrValue(getRadio());
      sendResult(str.toUpperCase());
    } catch (err) {
      console.error(err.message);
    }
  });

  btn10.addEventListener('click', function () {
    try {
      const str = getStrValue(getRadio());
      sendResult(str.toLowerCase());
    } catch (err) {
      console.error(err.message);
    }
  });

  btn11.addEventListener('click', function () {
    try {
      const str = getStrValue(getRadio());
      sendResult(str.replace(/ /g, ''));
    } catch (err) {
      console.error(err.message);
    }
  });

  btn12.addEventListener('click', function () {
    try {
      const str1 = getStrValue(getRadio());
      const str2 = getStrValue(getRadio() === 'A' ? 'B' : 'A');
      sendResult(str1.replace(/a/g, str2));
    } catch (err) {
      console.error(err.message);
    }
  });

}());
