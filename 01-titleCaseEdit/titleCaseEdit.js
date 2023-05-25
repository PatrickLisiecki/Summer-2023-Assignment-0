function titleCaseEdit(title) {
  // Insert code here;

  // Seperate title into each word
  const titleWords = title.split(" ")

  for (let i = 0; i < titleWords.length; i++) {
    titleWords[i] =
      titleWords[i].charAt(0).toUpperCase() + titleWords[i].slice(1)
  }

  let capitalTitle = titleWords.join(" ")
  return capitalTitle
}

// Do not edit this line;
module.exports = titleCaseEdit
