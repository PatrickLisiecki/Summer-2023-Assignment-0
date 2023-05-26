function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let unionSet = new Set()

  for (let i = 0; i < args.length; i++) {
    for (const item of args[i]) {
      if (!unionSet.has(item)) {
        unionSet.add(item)
      }
    }
  }

  return unionSet
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets
