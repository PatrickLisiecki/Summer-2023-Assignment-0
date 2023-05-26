function setUnionOfAnyAmountOfSets(...args) {
    // Insert code here;
    let unionSet = new Set();

    for (let i = 0; i < args.length; i++) {
        // Loop through each set
        for (const item of args[i]) {
            // Add the number if its not already in the union set
            if (!unionSet.has(item)) {
                unionSet.add(item);
            }
        }
    }

    return unionSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
