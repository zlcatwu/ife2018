(function () {
  const clock1 = document.querySelector('#clock-1');
  const clock2 = document.querySelector('#clock-2');

  function getDay (dateObj) {
    let result = '';
    switch (dateObj.getDay()) {
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

  function getDayEng (dateObj) {
    let result = '';
    switch (dateObj.getDay()) {
      case 0: result = 'Sunday'; break;
      case 1: result = 'Monday'; break;
      case 2: result = 'TuesDay'; break;
      case 3: result = 'Wednesday'; break;
      case 4: result = 'Thursday'; break;
      case 5: result = 'Friday'; break;
      case 6: result = 'Saturday'; break;
      default: break;
    }
    return result;
  }

  function format (val) {
    if (val.toString().length === 1) {
      return '0' + val;
    }
    return val;
  }

  function getData (dateObj) {
    const year = dateObj.getFullYear();
    const month = format(dateObj.getMonth() + 1);
    const date = format(dateObj.getDate());
    const day = getDay(dateObj);
    const hours = format(dateObj.getHours());
    const minutes = format(dateObj.getMinutes());
    const seconds = format(dateObj.getSeconds());
    
    return `${year}年${month}月${date}日 ${day} ${hours}:${minutes}:${seconds}`;
  }

  function getDataEng (dateObj) {
    const year = dateObj.getFullYear();
    const month = format(dateObj.getMonth() + 1);
    const date = format(dateObj.getDate());
    const day = getDayEng(dateObj);
    const hours = format(dateObj.getHours());
    const minutes = format(dateObj.getMinutes());
    const seconds = format(dateObj.getSeconds());
    const pmOrAm = dateObj.getHours() > 12 ? 'PM' : 'AM';

    return `${year}-${month}-${date} ${day} ${hours}:${minutes}:${seconds} ${pmOrAm}`;
  }

  function update () {
    clock1.innerHTML = getData(new Date());
    clock2.innerHTML = getDataEng(new Date());
  }

  setInterval(update, 1000);
}())