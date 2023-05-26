function frequencyCounter(word) {
  // Insert code here;
  var frequency = {}

  for (let i = 0; i < word.length; i++) {
    currentChar = word.charAt(i)
    
    if (currentChar in frequency) {
      frequency[currentChar]++
    } else {
      frequency[currentChar] = 1
    }
  }

  return frequency
}

// Do not edit this line;
module.exports = frequencyCounter
