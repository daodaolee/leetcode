var twoSum = function(nums, target) {
  let obj = {}
  for(let i = 0 ; i < nums.length; i++){
      let sub = target - nums[i];
      if(sub in obj){
          return [obj[sub], i]
      }
      obj[nums[i]] = i;
  }
};

console.log([2, 7, 11, 15], 9) // [0,1]