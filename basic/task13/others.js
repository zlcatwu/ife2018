console.log('--- task3 start ---');

/*
实现一个字符串头尾去除空格的函数
注意需要去除的空格，包括全角、半角空格
暂时不需要学习和使用正则表达式的方式
*/
function diyTrim(str) {
  let i = 0;

  let start = 0;
  for (; i < str.length; i++) {
    if (str[i] === ' ' || str[i] === '　') {
      start = i + 1;
    } else {
      break;
    }
  }

  let end = -1;
  for (; i < str.length; i++) {
    if (end === -1 && (str[i] === ' ' || str[i] === '　')) {
      end = i - 1;
    } else if (str[i] !== ' ' && str[i] !== '　') {
      end = -1;
    }
  }

  if (end === -1) {
    end = str.length - 1;
  }

  return str.substr(start, end - start + 1);
}

// 测试用例
console.log(diyTrim(' a f b    ')); // ->a f b
console.log(diyTrim('    ffdaf    ')); // ->ffdaf
console.log(diyTrim('1    ')); // ->1
console.log(diyTrim('　　f')); // ->f
console.log(diyTrim('  　  a f b 　　 ')); // ->a f b
console.log(diyTrim(' ')); // ->
console.log(diyTrim('　')); // ->
console.log(diyTrim('')); // ->

/*
去掉字符串str中，连续重复的地方
*/
function removeRepetition(str) {
  let result = '';
  let pre = '';
  for (const c of str) {
    if (c !== pre) {
      pre = c;
      result += c;
    }
  }
  return result;
}

// 测试用例
console.log(removeRepetition('aaa')); // ->a
console.log(removeRepetition('abbba')); // ->aba
console.log(removeRepetition('aabbaabb')); // ->abab
console.log(removeRepetition('')); // ->
console.log(removeRepetition('abc')); // ->abc

console.log('--- task3 end ---');
console.log('--- task4 start ---');

const tree = {
  "id": 0,
  "name": "root",
  "left": {
      "id": 1,
      "name": "Simon",
      "left": {
          "id": 3,
          "name": "Carl",
          "left": {
              "id": 7,
              "name": "Lee",
              "left": {
                  "id": 11,
                  "name": "Fate"
              }
          },
          "right": {
              "id": 8,
              "name": "Annie",
              "left": {
                  "id": 12,
                  "name": "Saber"
              }
          }
      },
      "right": {
          "id": 4,
          "name": "Tony",
          "left": {
              "id": 9,
              "name": "Candy"
          }
      }
  },
  "right": {
      "id": 2,
      "name": "right",
      "left": {
          "id": 5,
          "name": "Carl",
      },
      "right": {
          "id": 6,
          "name": "Carl",
          "right": {
              "id": 10,
              "name": "Kai"
          }        
      }
  }
}

function findIdByName (name) {
  return _findIdByName(tree, name);
}

function _findIdByName (node, name) {
  if (node.name === name) {
    return node.id;
  }
  if (node.left) {
    return _findIdByName(node.left, name);
  }
  if (node.right) {
    return _findIdByName(node.right, name);
  }
}

function findNameById (id) {
  return _findNameById(tree, id);
}

function _findNameById (node, id) {
  if (node.id === id) {
    return node.name;
  }
  if (node.left) {
    return _findNameById(node.left, id);
  }
  if (node.right) {
    return _findNameById(node.right, id);
  }
}

function getListWithDLR () {
  console.log('-- DLR start --');
  if (tree) {
    _getListWithDLR(tree);
  }
  console.log('-- DLR end --');
}

function _getListWithDLR (node) {
  console.log(node.name);
  if (node.left) {
    _getListWithDLR(node.left);
  }
  if (node.right) {
    _getListWithDLR(node.right);
  }
}

function getListWithLDR () {
  console.log('-- LDR start --');
  if (tree) {
    _getListWithLDR(tree);
  }
  console.log('-- LDR end --');
}

function _getListWithLDR (node) {
  if (node.left) {
    _getListWithLDR(node.left);
  }
  console.log(node.name);
  if (node.right) {
    _getListWithLDR(node.right);
  }
}

function getListWithLRD () {
  console.log('-- LRD start --');
  if (tree) {
    _getListWithLRD(tree);
  }
  console.log('-- LRD end --');
}

function _getListWithLRD (node) {
  console.log(node.name);
  if (node.left) {
    _getListWithLRD(node.left);
  }
  if (node.right) {
    _getListWithLRD(node.right);
  }
}

console.log(findIdByName('Carl') === 3);
console.log(findNameById(3) === 'Carl');
getListWithDLR();
getListWithLDR();
getListWithLRD();

console.log('--- task4 end ---');
console.log('--- task7 start ---');
const arr1 = [43, 54, 4, -4, 84, 100, 58, 27, 140];
const arr2 = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];
const arr3 = [[10, 14], [16, 60], [7, 44], [26, 35], [22, 63]];
const arr4 = [
  {
    id: 1,
    name: 'candy',
    value: 40
  }, {
    id: 2,
    name: 'Simon',
    value: 50
  }, {
    id: 3,
    name: 'Tony',
    value: 45
  }, {
    id: 4,
    name: 'Annie',
    value: 60
  }
];

arr1.sort(function (a, b) {
  return a - b;
});
console.log(arr1);
arr2.sort();
console.log(arr2);
arr2.sort(function (a, b) {
  for (let i = 0; i < a.length && i < b.length; i++) {
    if (b[i] > a[i]) {
      return 1;
    } else if (b[i] < a[i]) {
      return 0;
    }
  }
  return a.length - b.length;
});
console.log(arr2);
arr3.sort(function (a, b) {
  return b[1] - a[1];
});
console.log(arr3);
arr4.sort(function (a, b) {
  return a.value > b.value;
});
console.log(arr4);

console.log('--- task7 end ---');
console.log('--- task8 start ---');

const scoreObject = {
  "Tony": {
      "Math": 95,
      "English": 79,
      "Music": 68
  }, 
  "Simon": {
      "Math": 100,
      "English": 95,
      "Music": 98
  }, 
  "Annie": {
      "Math": 54,
      "English": 65,
      "Music": 88
  }
}

function scoreObjToArray (obj) {
  const result = [];
  for (const name in obj) {
    const score = obj[name];
    result.push([name, score.Math, score.English, score.Music]);
  }
  return result;
}
console.log(scoreObjToArray(scoreObject));

console.log('--- task9 end ---');
console.log('--- task10 start ---');

const menuArr = [
  [1, "Area1", -1],
  [2, "Area2", -1],
  [3, "Area1-1", 1],
  [4, "Area1-2", 1],
  [5, "Area2-1", 2],
  [6, "Area2-2", 2],
  [7, "Area1-2-3", 4],
  [8, "Area2-2-1", 6],
];
function menuArrToObj (arr) {
  const result = {};
  const nodes = {};
  for (const item of arr) {
    const obj = {
      name: item[1]
    };
    nodes[item[0]] = obj;
  }
  for (const item of arr) {
    const parentIdx = item[2];
    const idx = item[0];
    if (parentIdx === -1) {
      result[idx] = nodes[idx]
    } else {
      if (nodes[parentIdx].subMenu === undefined) {
        nodes[parentIdx].subMenu = {};
      }
      nodes[parentIdx].subMenu[idx] = nodes[idx];
    }
  }
  return result;
}
console.log(menuArrToObj(menuArr));

console.log('--- task10 end ---');
