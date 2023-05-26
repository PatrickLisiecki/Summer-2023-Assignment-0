function sumOfAllEvenNumbers(nums) {
    // Insert code here;
    /*let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            count++;
        }
    }*/

    const evenNumbers = nums.filter((num) => num % 2 == 0);

    return evenNumbers.length;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;
