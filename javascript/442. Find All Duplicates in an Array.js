/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  nums = nums.sort((a, b) => {
    return a - b;
  });

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums.splice(i, 1);
      --i;
    }
  }
  return nums;
};
