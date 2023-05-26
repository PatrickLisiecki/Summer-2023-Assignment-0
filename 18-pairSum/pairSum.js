function pairSum(nums, target) {
  // Insert code here;
  if (nums.length <= 1) {
    throw new Error("Array needs to contain at least two elements!")
  }

  prevNums = {}

  for (let i = 0; i < nums.length; i++) {
    difference = target - nums[i]
    if (difference in prevNums) {
      return true
    } else {
      prevNums[nums[i]] = i
    }
  }

  return false
}

// Do not edit this line;
module.exports = pairSum
