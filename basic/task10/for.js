(function () {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 || Math.floor(i / 10) === 3 || i % 10 === 3) {
      console.log('PA');
    } else {
      console.log(i);
    }
  }
}());