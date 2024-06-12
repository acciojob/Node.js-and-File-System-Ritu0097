const fs = require("fs");
const path = require("path");

// Get command line arguments
const filename = process.argv[2];
const wordToRemove = process.argv[3];

// Read the file
fs.readFile(path.join(__dirname, filename), "utf8", function (err, data) {
  if (err) throw err;

  // Replace all occurrences of the word
  const result = data.replace(new RegExp(wordToRemove, "g"), "");

  // Write the result back to the file
  fs.writeFile(path.join(__dirname, filename), result, "utf8", function (err) {
    if (err) throw err;
    console.log(`Removed ${wordToRemove} from ${filename}`);
  });
});