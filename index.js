'use strict';

function flatten(array) {
  let tempArr = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      tempArr = tempArr.concat(flatten(array[i]));
    } else {
      tempArr.push(array[i]);
    }
  }
  return tempArr;
}

function locate(array, target) {
  // do work here
  return flatten(array).includes(target);
}

module.exports = locate;
