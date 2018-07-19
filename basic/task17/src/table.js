import { getRegionValue, getProductValue } from './form';
import { fetchData } from './data';
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
  table.appendChild(tbody);
  clear();
  tableWrapper.appendChild(table);
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

function createTable() {
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
