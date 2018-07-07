// task1
(function () {
  const btn = document.querySelector('#submit-btn');
  const input = document.querySelector('#name');

  function log () {
    console.log(input.value);
  }

  function clear () {
    input.value = '';
  }

  btn.addEventListener('click', log);
  input.addEventListener('keyup', function (e) {
    switch (e.key) {
      case 'Enter': log(); break;
      case 'Escape': clear(); break;
      default: break;
    }
  });
}());

// task2
(function () {
  const schoolRadio = document.querySelector('#school');
  const companyRadio = document.querySelector('#company');
  const schoolSelect = document.querySelector('#school-select');
  const companySelect = document.querySelector('#company-select');

  companySelect.style.display = 'none';
  schoolSelect.style.display = 'none';

  schoolRadio.addEventListener('click', function (e) {
    schoolSelect.style.display = 'inline';
    companySelect.style.display = 'none';
  });
  companyRadio.addEventListener('click', function () {
    companySelect.style.display = 'inline';
    schoolSelect.style.display = 'none';
  });
}());

// task3
(function () {
  const ul = document.querySelector('ul');
  const picker = document.querySelector('.color-picker');

  ul.addEventListener('click', function (e) {
    const t = e.target;
    const color = t.style.backgroundColor;
    picker.innerHTML = color;
    picker.style.color = color;
    e.stopPropagation();
  });
}());

// task4
(function () {
  const fade = document.querySelector('#fade-obj');
  const btn = document.querySelector('#fade-btn');

  fade.style.opacity = 1;

  function hide () {
    const opacity = parseFloat(fade.style.opacity);
    fade.style.opacity = opacity - 0.1;
    if (opacity > 0) {
      setTimeout(hide, 50);
    } else {
      btn.disabled = false;
      btn.innerHTML = '淡入';
    }
  }

  function show () {
    const opacity = parseFloat(fade.style.opacity);
    fade.style.opacity = opacity + 0.1;
    if (opacity < 1) {
      setTimeout(show, 50);
    } else {
      btn.disabled = false;
      btn.innerHTML = '淡出';
    }
  }

  btn.addEventListener('click', function () {
    btn.disabled = true;
    if (btn.innerHTML === '淡入') {
      show();
    } else if (btn.innerHTML === '淡出') {
      hide();
    }
  });
}());

// task5
(function () {
  const smile = document.querySelector('#smile');
  smile.style.backgroundPositionY = '0px';
  setInterval(function () {
    const offset = smile.style.backgroundPositionY;
    const val = offset.substr(0, offset.indexOf('px'));
    smile.style.backgroundPositionY = `${(val - 480) % (480 * 17)}px`
  }, 60);
}());
