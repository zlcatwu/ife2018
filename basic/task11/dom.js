function filter (doms, func) {
  const result = [];
  for (let dom of doms) {
    if (func(dom)) {
      result.push(dom);
    }
  }
  return result;
}

function getAllListItem () {
  return document.getElementsByTagName('li');
}

function findAllHtmlSpanInOneSection (sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) {
    return;
  }
  const elems = section.getElementsByTagName('span');

  return filter(elems, (dom) => dom.innerHTML === 'HTML');
}

function findListItem (sectionId, spanCont) {
  const section = document.getElementById(sectionId);
  if (!section) {
    return;
  }
  const spans = section.getElementsByTagName('span');

  return filter(spans, (dom) => dom.innerHTML === spanCont);
}

function getActiveLinkContent (sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) {
    return;
  }
  const links = section.getElementsByClassName('active');
  const result = [];
  for (let link of links) {
    result.push(link.innerHTML);
  }

  return result;
}

// query
function getAllListItem2 () {
  return document.querySelectorAll('li');
}

function findAllHtmlSpanInOneSection2 (sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) {
    return;
  }
  const elems = section.querySelectorAll('span');

  return [].filter.call(elems, (dom) => dom.innerHTML === 'HTML');
}

function findListItem2 (sectionId, spanCont) {
  const section = document.querySelector(`#${sectionId}`);
  if (!section) {
    return;
  }
  const spans = section.querySelectorAll('span');

  return [].filter.call(spans, (dom) => dom.innerHTML === spanCont);
}

function getActiveLinkContent2 (sectionId) {
  const section = document.querySelector(`#${sectionId}`);
  if (!section) {
    return;
  }
  const links = section.querySelectorAll('.active');

  return [].map.call(links, (dom) => dom.innerHTML);
}
