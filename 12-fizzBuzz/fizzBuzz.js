function fizzBuzz(start, end) {
  // Insert code here;
  let result = []

  for (let i = start; i <= end; i++) {
    current = ""
    if (i % 3 == 0) {
      current += "Fizz"
    }
    if (i % 5 == 0) {
      current += "Buzz"
    }
    
    if (current) {
      result.push(current)
    } else {
      result.push(i)
    }
  }

  return result
}

// Do not edit this line;
module.exports = fizzBuzz
