/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  if (nums.length <= 3) {
    return nums.reduce((prev, cur) => prev + cur);
  }

  let start = 0,
    middle = 1,
    end = 2,
    temp = [];
  // 当start遍历到 nums.length - 3 时，是最后一次遍历了
  while (start <= nums.length - 3) {
    if (temp.length > 1) {
      temp = temp.sort((a, b) => Math.abs(a) - Math.abs(b));
      // temp.length = 1;
    }
    if (end < nums.length - 1) {
      // 还没有匹配到最后一个
      temp.push(nums[start] + nums[middle] + nums[end]);
      end += 1;
    } else if (end == nums.length - 1) {
      // 遍历到最后一个了
      if (start == nums.length - 3) {
        // start，middle和end都遍历到最后了
        temp.push(nums[start] + nums[middle] + nums[end]);
        start += 1;
      } else if (middle == nums.length - 2) {
        // middle和end都遍历到最后了
        temp.push(nums[start] + nums[middle] + nums[end]);
        start += 1;
        middle = start + 1;
        end = start + 2;
      } else {
        // end遍历到之后了
        temp.push(nums[start] + nums[middle] + nums[end]);
        middle += 1;
        end = middle + 1;
      }
    }
  }

  console.log(temp);
  for (let i = 0; i < temp.length; i++) {
    temp[i] = temp[i] - target;
  }
  console.log(temp);
   temp.sort((a, b) => Math.abs(a) - Math.abs(b));
  //  console.log(temp)
  //   // temp.length = 0;
  //   return temp[0] + target;
};
threeSumClosest([1, 1, 1, 0], 100);
