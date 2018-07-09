(function () {
  const input = document.querySelector('#queue-input');
  const result = document.querySelector('#queue-cont');
  const btnIn = document.querySelector('#in-btn');
  const btnOut = document.querySelector('#out-btn');
  const btnFront = document.querySelector('#front-btn');
  const btnEmpty = document.querySelector('#empty-btn');
  const queue = ['apple', 'pear'];

  function enqueue (val) {
    queue.unshift(val);
  }

  function dequeue () {
    queue.pop();
  }

  function update () {
    result.innerHTML = queue.join('->');
  }

  btnIn.addEventListener('click', function () {
    const val = input.value;
    input.value = '';
    enqueue(val);
    update();
  });

  btnOut.addEventListener('click', function () {
    dequeue();
    update();
  });

  btnFront.addEventListener('click', function () {
    console.log(queue[queue.length - 1]);
  });

  btnEmpty.addEventListener('click', function () {
    console.log(queue.length === 0);
  });

  update();

}());
