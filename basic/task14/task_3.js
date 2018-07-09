(function () {
  // 闰年与非闰年每个月的天数
  const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const normalYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const yearSelect = document.querySelector('#year-select');
  const monthSelect = document.querySelector('#month-select');
  const dateSelect = document.querySelector('#date-select');
  const hourSelect = document.querySelector('#hour-select');
  const minuteSelect = document.querySelector('#minute-select');
  const secondSelect = document.querySelector('#second-select');
  const result = document.querySelector('#result-wrapper');

  function initYearOptions () {
    for (let i = 0; i < 33; i++) {
      const option = document.createElement('option');
      option.value = i + 2000;
      option.innerHTML = i + 2000;
      yearSelect.appendChild(option);
    }
  }

  function initMonthOptions () {
    for (let i = 0; i < 12; i++) {
      const option = document.createElement('option');
      option.value = i + 1;
      option.innerHTML = i + 1;
      monthSelect.appendChild(option);
    }
  }

  function initDateOptions () {
    const year = yearSelect.value;
    const month = monthSelect.value - 1;
    // 记录当前选中的date值，在清空后进行恢复
    const dateIdx = dateSelect.value === '' ? 0 : dateSelect.value - 1;
    const count = isLeapYear(year) ? leapYear[month] : normalYear[month];
    if (dateSelect.childNodes.length !== count) {
      // 月份数量需要更新时进行清空
      while (dateSelect.firstChild) {
        dateSelect.removeChild(dateSelect.firstChild);
      }
    }
    for (let i = 0; i < count; i++) {
      const option = document.createElement('option');
      option.value = i + 1;
      option.innerHTML = i + 1;
      dateSelect.appendChild(option);
    }
    // 对date进行恢复
    if (dateIdx < count) {
      dateSelect.selectedIndex = dateIdx;
    } else {
      dateSelect.selectedIndex = count - 1;
    }
  }

  function initHourOptions () {
    for (let i = 0; i < 60; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.innerHTML = i;
      hourSelect.appendChild(option);
    }
  }

  function initMinuteOptions () {
    for (let i = 0; i < 24; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.innerHTML = i;
      minuteSelect.appendChild(option);
    }
  }

  function initSecondOptions () {
    for (let i = 0; i < 60; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.innerHTML = i;
      secondSelect.appendChild(option);
    }
  }

  function initOptions () {
    initYearOptions();
    initMonthOptions();
    initDateOptions();
    initHourOptions();
    initMinuteOptions();
    initSecondOptions();
  }
  
  function getSelectedTime () {
    const result = new Date();
    result.setFullYear(yearSelect.value);
    result.setMonth(monthSelect.value - 1);
    result.setDate(dateSelect.value);
    result.setHours(hourSelect.value);
    result.setMinutes(minuteSelect.value);
    result.setSeconds(secondSelect.value);
    result.setMilliseconds(0);
    return result;
  }

  function getCurrentTime () {
    const now = new Date();
    now.setMilliseconds(0);
    return now;
  }

  function isLeapYear (year) {
    return year % 4 === 0 && year % 100 !== 0;
  }

  function getDay (day) {
    let result = '';
    switch (day) {
      case 0: result = '星期日'; break;
      case 1: result = '星期一'; break;
      case 2: result = '星期二'; break;
      case 3: result = '星期三'; break;
      case 4: result = '星期四'; break;
      case 5: result = '星期五'; break;
      case 6: result = '星期六'; break;
      default: break;
    }
    return result;
  }

  function format2Bit (val) {
    if (val.toString().length === 1) {
      return '0' + val;
    }
    return val;
  }

  function formatTime (time) {
    const year = time.getFullYear();
    const month = format2Bit(time.getMonth() + 1);
    const date = format2Bit(time.getDate());
    const hour = format2Bit(time.getHours());
    const minute = format2Bit(time.getMinutes());
    const second = format2Bit(time.getSeconds());
    const day = getDay(time);
    return `${year}年${month}月${date}日 ${day} ${hour}:${minute}:${second}`;
  }

  function formatMinus (val) {
    val = Math.floor(val / 1000);
    const second = Math.floor(val) % 60;
    const minute = Math.floor(val / 60) % 60;
    const hour = Math.floor(val / 60 / 60) % 24;
    const day = Math.floor(val / 60 / 60 / 24);
    return `${day} 天 ${hour} 小时 ${minute} 分 ${second} 秒`;
  }

  function update () {
    const selectedTime = getSelectedTime();
    const now = getCurrentTime();
    const words = now - selectedTime > 0 ? '已经过去' : '还有';
    const minus = formatMinus(Math.abs(now - selectedTime));
    const str = `现在距离 ${formatTime(selectedTime)} ${words} ${minus}`;
    result.innerHTML = str;
  }

  function onChange () {
    initDateOptions();
    update();
  }

  yearSelect.addEventListener('input', onChange);
  monthSelect.addEventListener('input', onChange);
  dateSelect.addEventListener('input', onChange);
  hourSelect.addEventListener('input', onChange);
  minuteSelect.addEventListener('input', onChange);
  secondSelect.addEventListener('input', onChange);

  setInterval(update, 1000);
  initOptions();
}());
