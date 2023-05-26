function sumOfAllOddNumbers(nums) {
    // Insert code here;
    /*let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 1) {
            count++;
        }
    }*/

    const oddNumbers = nums.filter((num) => num % 2 == 1);

    return oddNumbers.length;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;
