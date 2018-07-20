const contABC = document.querySelector('#contABC');
const contDEF = document.querySelector('#contDEF');

function getParams() {
  const hash = location.hash.slice(1);
  const params = hash.split('&');
  const group1 = params.filter((param) => param.indexOf('abc') !== -1);
  const group2 = params.filter((param) => param.indexOf('def') !== -1);
  const result = {};
  if (group1.length) {
    const str = group1[0];
    result.abc = str.slice(str.indexOf('=') + 1);
  }
  if (group2.length) {
    const str = group2[0];
    result.def = str.slice(str.indexOf('=') + 1);
  }
  return result;
}

function setParams({ abc, def }) {
  let hash = '';
  if (abc) {
    hash += `abc=${abc}`;
  }
  if (def) {
    if (abc) {
      hash += '&';
    }
    hash += `def=${def}`;
  }
  location.hash = hash;
}

function render() {
  const { abc, def } = getParams();
  if (abc) {
    const btn = document.querySelector(`#${abc}`);
    contABC.innerHTML = btn.innerHTML;
  }
  if (def) {
    const btn = document.querySelector(`#${def}`);
    contDEF.innerHTML = btn.innerHTML;
  }
}

document.addEventListener('click', function(e) {
  const btn = e.target;
  if (btn.tagName !== 'BUTTON') {
    return;
  }
  const group = btn.getAttribute('data-group');
  const val = btn.id;
  const params = getParams();
  params[group] = val;
  setParams(params);
});

window.onhashchange = render;

render();
