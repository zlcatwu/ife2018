// 第一步
(function () {
  for (let n = 1; n <=9; n++) {
    let arr = [];
    for (let m = 1; m <= 9; m++) {
      if (m >= n) {
        arr.push(`${n} * ${m} = ${n * m}`);
      }
    }
    console.log(arr.join(', '));
  }
}());

// 第二步
(function () {
  const table = document.createElement('table');
  for (let n = 1; n <=9; n++) {
    const tr = document.createElement('tr');
    table.appendChild(tr);
    for (let m = 1; m <= 9; m++) {
      if (m >= n) {
        const td = document.createElement('td');
        td.innerHTML = `${n} * ${m} = ${n * m}`;
        tr.appendChild(td);
      }
    }
  }
  const body = document.getElementsByTagName('body')[0];
  body.appendChild(table);
}());

