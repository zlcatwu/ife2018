(function () {
  const input = document.querySelector('#stack-input');
  const result = document.querySelector('#stack-cont');
  const btnIn = document.querySelector('#push-btn');
  const btnOut = document.querySelector('#pop-btn');
  const btnFront = document.querySelector('#front-btn');
  const btnEmpty = document.querySelector('#empty-btn');
  const queue = ['apple', 'pear'];

  function push (val) {
    queue.push(val);
  }

  function pop () {
    queue.pop();
  }

  function update () {
    result.innerHTML = queue.join('->');
  }

  btnIn.addEventListener('click', function () {
    const val = input.value;
    input.value = '';
    push(val);
    update();
  });

  btnOut.addEventListener('click', function () {
    pop();
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
