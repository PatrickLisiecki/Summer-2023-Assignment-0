class MySolution {
    constructor() {
        this.flag = false; // this is optional to use;
    }

    binarySearch(nums, target) {
        // Insert code here;
        // Base case: target was not found
        if (nums.length <= 1 && nums[0] != target) {
            return false;
        }

        // Get the middle index
        let mid = Math.floor(nums.length / 2);

        // Target was found
        if (nums[mid] === target) {
            this.flag = true;
            return true;
        } else if (nums[mid] < target) {
            // Target is in right side of array
            return this.binarySearch(nums.slice(mid), target);
        } else if (nums[mid] > target) {
            // Target is in left side of array
            return this.binarySearch(nums.slice(0, mid), target);
        }
    }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
