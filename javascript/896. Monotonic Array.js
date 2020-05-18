/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
  return isMonotnic(A);
};

function isMonotnic(arr) {
  var isIncreasing = true,
    isDecreasing = true;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      isIncreasing = false;
    }
    if (arr[i] < arr[i + 1]) {
      isDecreasing = false;
    }
  }
  return isIncreasing || isDecreasing;
}
