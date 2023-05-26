function titleCaseEdit(title) {
    // Insert code here;

    // Seperate title into seperate words
    const titleWords = title.split(" ");

    // Uppercase the first letter of every word
    for (let i = 0; i < titleWords.length; i++) {
        titleWords[i] =
            titleWords[i].charAt(0).toUpperCase() + titleWords[i].slice(1);
    }

    // Join the words back into a single string
    let capitalTitle = titleWords.join(" ");
    return capitalTitle;
}

// Do not edit this line;
module.exports = titleCaseEdit;
