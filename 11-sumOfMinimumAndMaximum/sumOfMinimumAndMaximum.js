function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  let minValue = nums[0]
  let maxValue = nums[0]

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minValue) {
      minValue = nums[i]
    } else if (nums[i] > maxValue) {
      maxValue = nums[i]
    }
  }

  return minValue + maxValue
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum
