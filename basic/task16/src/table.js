import { getAreaValue, getProductValue } from './form';
import { fetchData } from './data';

const tableWrapper = document.querySelector('#table-wrapper');

export function render() {
  const areas = getAreaValue();
  const products = getProductValue();
  const data = fetchData({ areas, products });
  const { header, body } = handleData(data, { areas, products });
  const table = createTable();
  const tbody = createTableBody(header, body);
  table.appendChild(tbody);
  clear();
  tableWrapper.appendChild(table);
}

function createTable() {
  const table = document.createElement('table');
  return table;
}

function createTableCell(tag, text) {
  const td = document.createElement(tag);
  td.innerHTML = text;
  return td;
}

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
    row.forEach((column, idx) => {
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

function handleData(data, { areas, products }) {
  const header = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  const body = [];
  if (products.length === 1 || areas.length !== 1) {
    header.unshift('地区');
    header.unshift('商品');
    data.forEach((row) => {
      const r = [];
      r.push(row.product);
      r.push(row.region);
      row.sale.forEach((d) => {
        r.push(d);
      });
      body.push(r);
    });
  } else if (areas.length === 1) {
    header.unshift('商品');
    header.unshift('地区');
    data.forEach((row) => {
      const r = [];
      r.push(row.region);
      r.push(row.product);
      row.sale.forEach((d) => {
        r.push(d);
      });
      body.push(r);
    });
  }
  return { header, body };
}
