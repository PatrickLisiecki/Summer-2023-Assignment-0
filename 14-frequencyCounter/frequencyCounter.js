function frequencyCounter(word) {
    // Insert code here;
    var frequency = {};

    for (let i = 0; i < word.length; i++) {
        currentChar = word.charAt(i);

        // If the char is in the map, increment count by 1
        // Else add the char to the map with a count of 1
        if (currentChar in frequency) {
            frequency[currentChar]++;
        } else {
            frequency[currentChar] = 1;
        }
    }

    return frequency;
}

// Do not edit this line;
module.exports = frequencyCounter;
