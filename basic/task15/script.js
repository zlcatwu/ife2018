(function () {
  const postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];
  const sugWrapper = document.querySelector('#email-sug-wrapper');
  const input = document.querySelector('#email-input');

  function init () {
    input.focus();
    hideSugs();
  }

  function htmlEncode (str) { 
    let s = '';
    if (str.length == 0) {
      return '';
    }
    s = str.replace(/&/g, '&amp;');
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/ /g, "&nbsp");
    s = s.replace(/\"/g, '&quot;');
    return s;
  }

  function htmlDecode (str){ 
    var s = '';
    if (str.length == 0) {
      return '';
    }
    s = str.replace(/&amp;/g, "&");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/ /g, " ");
    s = s.replace(/"/g, "\"");
    return s; 
}

  function getInputVal () {
    return input.value.trim();
  }

  function getSugs () {
    let val = getInputVal();
    let availList = postfixList;
    const result = [];
    const idx = val.indexOf('@');
    const filter = val.substr(idx + 1);
    if (idx !== -1) {
      val = val.substr(0, idx);
      availList = postfixList.filter(function (postfix) {
        return postfix.startsWith(filter);
      });
      if (availList.length === 0) {
        availList = postfixList;
      }
    }
    for (const postfix of availList) {
      result.push(`${val}@${postfix}`);
    }
    return result;
  }

  function createSugs () {
    while (sugWrapper.firstChild) {
      sugWrapper.removeChild(sugWrapper.firstChild);
    }
    const sugs = getSugs();
    for (let i = 0; i < sugs.length; i++) {
      const sug = sugs[i];
      const li = document.createElement('li');
      if (i === 0) {
        li.className = 'active';
      }
      li.innerHTML = htmlEncode(sug);
      sugWrapper.appendChild(li);
    }
  }

  function controlStaus () {
    const val = getInputVal();
    if (val.length === 0) {
      hideSugs();
    } else {
      showSugs();
    }
  }

  function hideSugs () {
    sugWrapper.style.display = 'none';
  }

  function showSugs () {
    sugWrapper.style.display = 'block';
  }

  function onInput () {
    createSugs();
    controlStaus();
  }

  function onClick (e) {
    if (!sugWrapper.hasChildNodes(e.target)) {
      return;
    }
    const val = htmlDecode(e.target.innerHTML);
    input.value = val;
    hideSugs();
    e.preventDefault();
    input.focus();
  }

  function getSelectedItemAndIdx () {
    const active = document.querySelector('.active');
    const idx =  Array.prototype.indexOf.call(sugWrapper.childNodes, active);
    return [active, idx];
  }

  function selectNext () {
    let [selected, idx] = getSelectedItemAndIdx();
    selected.className = '';
    idx = (idx + 1) % sugWrapper.childNodes.length;
    sugWrapper.childNodes[idx].className = 'active';
  }

  function selectLast () {
    let [selected, idx] = getSelectedItemAndIdx();
    selected.className = '';
    if (--idx < 0) {
      idx += sugWrapper.childNodes.length;
    }
    sugWrapper.childNodes[idx].className = 'active';
  }

  function verifyCurrent () {
    const active = document.querySelector('.active');
    const val = htmlDecode(active.innerHTML);
    input.value = val;
    hideSugs();
  }

  function selectAll () {
    input.select();
  }

  function onKeyDown (e) {
    if (['ArrowUp', 'ArrowDown'].indexOf(e.code) !== -1) {
      e.preventDefault();
    }
    switch (e.code) {
      case 'ArrowUp': selectLast(); break;
      case 'ArrowDown': selectNext(); break;
      case 'Enter': verifyCurrent(); break;
      case 'Escape': selectAll(); break;
      default: break;
    }
  }

  input.addEventListener('input', onInput);
  input.addEventListener('keydown', onKeyDown);
  sugWrapper.addEventListener('click', onClick);

  init();

}());
