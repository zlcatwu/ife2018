(function () {
  const hour = new Date().getHours();
  if (hour >= 6 && hour <= 12) {
    document.write('早~');
  } else if (hour >= 13 && hour <= 18) {
    document.write('下午好~');
  } else {
    document.write('晚上好~');
  }
}());
