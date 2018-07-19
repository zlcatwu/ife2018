import { render } from './table';

const regionList = ['华东', '华南', '华北'];
const productList = ['手机', '笔记本', '智能音箱'];

const regionWrapper = document.querySelector('#region-wrapper');
const productWrapper = document.querySelector('#product-wrapper');

export function getRegionValue() {
  let nodes = getCheckboxList(regionWrapper);
  return nodes.filter((node) => node.checked).map((node) => node.value);
}

export function getProductValue() {
  let nodes = getCheckboxList(productWrapper);
  return nodes.filter((node) => node.checked).map((node) => node.value);
}

export function initForm() {
  createCheckboxGroup(regionWrapper, 'region', regionList);
  createCheckboxGroup(productWrapper, 'product', productList);
}

function createCheckbox(id, value) {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = id;
  checkbox.value = value;
  return checkbox;
}

function createLabel(id, text) {
  const label = document.createElement('label');
  label.innerHTML = text;
  label.setAttribute('for', id);
  return label;
}

function createSelectItem(id, text) {
  const checkbox = createCheckbox(id, text);
  const label = createLabel(id, text);
  return [checkbox, label];
}

function getCheckboxList(container) {
  const list = [...container.querySelectorAll('input[type="checkbox"]')];
  return list.filter((checkbox) => checkbox.getAttribute('data-all') === 'false');
}

function createCheckboxGroup(container, group, options) {
  const [checkboxAll, labelAll] = createSelectItem(`${group}-all`, '全选');
  checkboxAll.setAttribute('data-all', true);
  checkboxAll.checked = true;
  container.appendChild(checkboxAll);
  container.appendChild(labelAll);
  options.forEach((option, idx) => {
    const [checkbox, label] = createSelectItem(`${group}-${idx}`, option);
    checkbox.checked = true;
    checkbox.setAttribute('data-all', false);
    container.appendChild(checkbox);
    container.appendChild(label);
  });
  container.addEventListener('change', function(e) {
    const target = e.target;
    if (target.tagName !== 'INPUT' && target.type === 'checkbox') {
      return;
    }
    // 还原本次触发的改变
    target.checked = !target.checked;
    let checkboxList = getCheckboxList(container);
    if (target.getAttribute('data-all') === 'true') {
      // 全选逻辑
      const unCheckboxList = checkboxList.filter((checkbox) => !checkbox.checked);
      if (unCheckboxList.length) {
        // 还有未选的checkbox
        target.checked = true;
        unCheckboxList.forEach((checkbox) => {
          checkbox.checked = true;
        });
      }
    } else {
      // 非全选逻辑
      const unCheckboxList = checkboxList.filter((checkbox) => !checkbox.checked);
      if (unCheckboxList.length === 1 && !target.checked) {
        // 最后一个
        target.checked = true;
        checkboxAll.checked = true;
      } else if (unCheckboxList.length === 0) {
        // 全选状态
        target.checked = false;
        checkboxAll.checked = false;
      } else if (unCheckboxList.length === checkboxList.length - 1 && target.checked) {
        // 不允许最后一个勾选取消
      } else {
        target.checked = !(target.checked);
      }
    }
    render();
  });
}
