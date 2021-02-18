// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var threeSumClosest = function (nums, target) {
//   if (nums.length <= 3) {
//     return nums.reduce((prev, cur) => prev + cur);
//   }

//   let start = 0,
//     middle = 1,
//     end = 2,
//     temp = [];
//   // 当start遍历到 nums.length - 3 时，是最后一次遍历了
//   while (start <= nums.length - 3) {
//     if (temp.length > 1) {
//       temp = temp.sort((a, b) => Math.abs(a) - Math.abs(b));
//       // temp.length = 1;
//     }
//     if (end < nums.length - 1) {
//       // 还没有匹配到最后一个
//       temp.push(nums[start] + nums[middle] + nums[end] - target);
//       end += 1;
//     } else if (end == nums.length - 1) {
//       // 遍历到最后一个了
//       if (start == nums.length - 3) {
//         // start，middle和end都遍历到最后了
//         temp.push(nums[start] + nums[middle] + nums[end] - target);
//         start += 1;
//       } else if (middle == nums.length - 2) {
//         // middle和end都遍历到最后了
//         temp.push(nums[start] + nums[middle] + nums[end] - target);
//         start += 1;
//         middle = start + 1;
//         end = start + 2;
//       } else {
//         // end遍历到之后了
//         temp.push(nums[start] + nums[middle] + nums[end] - target);
//         middle += 1;
//         end = middle + 1;
//       }
//     }
//   }

//   temp.sort((a, b) => Math.abs(a) - Math.abs(b));
//   return temp[0] + target;
// };
// threeSumClosest([1, 1, 1, 0], 100);


var threeSumClosest = function (nums, target) {
  if (nums.length < 3) return;
  if (n === 3) {
    return nums.reduce((prev, cur) => prev + cur);
  }
  // 先排序，保证双指针移动的时候，累加是递增的
  nums.sort((a, b) => a - b);
  // min是一个特别大的值用来当最小值，后面用来比较和替换，获取小值, result就是结果要返回的和
  let min = Infinity,
    result;
  // 定义一个中间的指针，指针一定要在 start 和 end 中间
  for (let i = 0; i < nums.length - 1; i++) {
    let start = i + 1,
      end = nums.length - 1;
    // 当内部逻辑增加到 start 的位置大于 end 了，其实就开始重复了
    while (start < end) {
      let sum = nums[start] + nums[i] + nums[end];
      // 求最小值
      let diff = Math.abs(sum - target);
      // 更新最小值
      if (diff < min) {
        min = diff;
        result = sum;
      }
      if (sum < target) {
        // 和仍然小于target，就让 start 往右移，把和加大，从而尝试拿到最小值
        start++;
      } else if (sum > target) {
        // 当和大于target，就让 end 往左移，把和减小，从而尝试拿到最小值
        end--;
      } else if (sum === target) {
        // 当和与 target 一样了，差就是0
        return sum;
      }
    }
  }
  return result;
};
