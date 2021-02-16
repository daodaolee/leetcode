/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  return nums.sort((a,b) => a - b).reduce((prev, cur, index) => index & 1 ? prev : prev + cur)
};

console.log(arrayPairSum([1, 4, 3, 2])) // 4
