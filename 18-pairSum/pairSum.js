function pairSum(nums, target) {
    // Insert code here;
    if (nums.length <= 1) {
        throw new Error("Array needs to contain at least two elements!");
    }

    // Using hash map
    prevNums = {};

    for (let i = 0; i < nums.length; i++) {
        // Get the current difference
        difference = target - nums[i];

        // Check if difference has been encountered before
        if (difference in prevNums) {
            return true;
        } else {
            prevNums[nums[i]] = i;
        }
    }

    return false;
}

// Do not edit this line;
module.exports = pairSum;
