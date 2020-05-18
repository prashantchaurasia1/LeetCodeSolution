/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

var relativeSortArray = function (arr1, arr2) {
  var resArray = [];
  for (var i = 0; i < arr2.length; i++) {
    for (var j = 0; j < arr1.length; j++) {
      if (arr2[i] == arr1[j]) {
        resArray.push(arr1[j]);
        arr1[j] = null;
      }
    }
  }

  arr1 = arr1.sort(function (a, b) {
    return a - b;
  });

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] != null) {
      resArray.push(arr1[i]);
    }
  }
  return resArray;
};
