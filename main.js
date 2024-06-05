const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function removeWordFromFile(filename, word) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      return;
    }

    const modifiedContent = data.replace(new RegExp(word, 'gi'), '');

    fs.writeFile(filename, modifiedContent, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing to file: ${err}`);
        return;
      }

      console.log(`All occurrences of "${word}" have been removed from ${filename}.`);
    });
  });
}

rl.question('Enter the filename: ', (filename) => {
  rl.question('Enter the word to remove: ', (word) => {
    removeWordFromFile(filename, word);
    rl.close();
  });
});