import { getRegionValue, getProductValue } from './form';
import { fetchData, editData } from './data';
import * as bar from './bar';
import * as line from './line';

const tableWrapper = document.querySelector('#table-wrapper');

export function render() {
  const regions = getRegionValue();
  const products = getProductValue();
  const data = fetchData({ regions, products });
  const { header, body } = handleData(data, { regions, products });
  const table = createTable();
  const tbody = createTableBody(header, body);
  tbody.addEventListener('mouseover', onMouseOver);
  tbody.addEventListener('mouseout', onMouseOut);
  tbody.addEventListener('click', selectData);
  table.appendChild(tbody);
  clear();
  tableWrapper.appendChild(table);
}

// 已选中的
let selectedVal = 0;
let selectedTd = null;

// 将选中的
let hoverTips = null;
let hoverTd = null;

function createBtn(text) {
  const btn = document.createElement('button');
  btn.innerHTML = text;
  return btn;
}

function selectData(e) {
  // 取消先前选中的数据
  cancelUpdate();
  e.stopPropagation();
  const td = e.target;
  if (td.tagName !== 'TD' || td.firstChild.tagName === 'INPUT') {
    return;
  }
  const tr = td.parentNode;
  const region = tr.getAttribute('data-region');
  const product = tr.getAttribute('data-product');
  const month = td.getAttribute('data-month');
  const input = document.createElement('input');
  selectedTd = td;
  selectedVal = td.innerHTML;
  input.value = selectedVal;
  input.addEventListener('keyup', function(e) {
    switch(e.code) {
      case 'Escape': cancelUpdate(); break;
      case 'Enter': updateVal({ region, product, month, value: input.value }); break;
      default: break;
    }
  });
  while (td.firstChild) {
    td.removeChild(td.firstChild);
  }
  const confirmBtn = createBtn('确定');
  confirmBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    updateVal({
      region,
      product,
      month,
      value: input.value,
    });
  });
  const cancelBtn = createBtn('取消');
  cancelBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    cancelUpdate();
  });
  td.appendChild(input);
  td.appendChild(confirmBtn);
  td.appendChild(cancelBtn);
  input.focus();
}

function cancelUpdate() {
  if (selectedTd === null) {
    return;
  }
  while (selectedTd.firstChild) {
    selectedTd.removeChild(selectedTd.firstChild);
  }
  selectedTd.innerHTML = selectedVal;
  selectedTd = null;
  selectedVal = 0;
}

function updateVal({ region, product, month, value }) {
  if (isNaN(value)) {
    alert('数值必须为数字');
    return;
  }
  value = parseInt(value);
  editData({
    region, product, month, value,
  });
  selectedVal = value;
  cancelUpdate();
}

function onMouseOver(e) {
  const target = e.target;
  if (target.tagName !== 'TD') {
    return;
  }
  const tr = target.parentNode;
  const region = tr.getAttribute('data-region');
  const product = tr.getAttribute('data-product');
  const data = fetchData({ regions: region, products: product })[0];
  bar.render({
    region: data.region,
    product: data.product,
    body: data.sale
  });
  line.render({
    region: data.region,
    product: data.product,
    body: data.sale
  });
}

function onMouseOut() {
  const regions = getRegionValue();
  const products = getProductValue();
  const data = fetchData({ regions, products });
  line.renderAll(data.map((item) => ({
    region: item.region,
    product: item.product,
    body: item.sale
  })));
}

let isInitGlobalClick = false;
function initGlobalClick() {
  if (isInitGlobalClick) {
    return;
  }
  document.addEventListener('click', function(e) {
    cancelUpdate();
  });
}

function createTable() {
  // 用于取消编辑操作
  initGlobalClick();
  const table = document.createElement('table');
  return table;
}

function createTableCell(tag, text) {
  const td = document.createElement(tag);
  td.innerHTML = text;
  return td;
}

// body: [{ region, product, data }]
function createTableBody(header, body) {
  const tbody = document.createElement('tbody');
  const trHead = document.createElement('tr');
  header.forEach((text) => {
    const th = createTableCell('th', text);
    trHead.appendChild(th);
  });
  tbody.appendChild(trHead);
  let pre = '';
  let preNode = null;
  body.forEach((row) => {
    const tr = document.createElement('tr');
    tr.setAttribute('data-region', row.region);
    tr.setAttribute('data-product', row.product);
    row.data.forEach((column, idx) => {
      if (idx === 0) {
        // 第一列需要考虑合并
        if (column !== pre) {
          const td = createTableCell('td', column);
          pre = column;
          preNode = td;
          preNode.setAttribute('rowspan', '1');
          tr.appendChild(td);
        } else {
          preNode.setAttribute('rowspan', parseInt(preNode.getAttribute('rowspan')) + 1);
        }
      } else {
        const td = createTableCell('td', column);
        if (idx > 1) {
          td.setAttribute('data-month', idx - 1);
        }
        tr.appendChild(td);
      }
    });
    tbody.appendChild(tr);
  });
  return tbody;
}

function clear() {
  while(tableWrapper.firstChild) {
    tableWrapper.removeChild(tableWrapper.firstChild);
  }
}

function handleData(data, { regions, products }) {
  const header = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  const body = [];
  if (products.length === 1 || regions.length !== 1) {
    header.unshift('地区');
    header.unshift('商品');
    data.forEach((row) => {
      const r = [];
      r.push(row.product);
      r.push(row.region);
      row.sale.forEach((d) => {
        r.push(d);
      });
      body.push({
        data: r,
        region: row.region,
        product: row.product
      });
    });
  } else if (region.length === 1) {
    header.unshift('商品');
    header.unshift('地区');
    data.forEach((row) => {
      const r = [];
      r.push(row.region);
      r.push(row.product);
      row.sale.forEach((d) => {
        r.push(d);
      });
      body.push({
        data: r,
        region: row.region,
        product: row.product
      });
    });
  }
  return { header, body };
}
