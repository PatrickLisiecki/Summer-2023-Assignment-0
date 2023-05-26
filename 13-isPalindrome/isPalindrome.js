function isPalindrome(word) {
  // Insert code here;
  let start = 0
  let end = word.length - 1

  while (start <= end) {
    if (word.charAt(start) != word.charAt(end)) {
      return false
    }
    start++
    end--
  }

  return true
}

// Do not edit this line;
module.exports = isPalindrome
