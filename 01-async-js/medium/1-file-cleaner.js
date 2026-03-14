// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');

const filePath = 'a.txt'; // change to your file name

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // Replace multiple spaces with a single space
  const cleaned = data.replace(/\s+/g, ' ').trim();

  fs.writeFile(filePath, cleaned, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("File cleaned successfully!");
  });
});