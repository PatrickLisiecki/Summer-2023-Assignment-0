function countOfAllNumbersSmallerThanTarget(nums, target) {
    // Insert code here;
    /*let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < target) {
            count++;
        }
    }*/

    // Using array filter
    const numbersSmallerThanTarget = nums.filter((num) => num < target);

    return numbersSmallerThanTarget.length;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
