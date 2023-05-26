function countOfAllBooleansAndStrings(arr) {
    // Insert code here;
    let booleanAndStringCount = 0;

    for (let i = 0; i < arr.length; i++) {
        type = typeof arr[i];
        if (type === "boolean" || type === "string") {
            booleanAndStringCount++;
        }
    }

    return booleanAndStringCount;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
