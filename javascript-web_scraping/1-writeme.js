#!/usr/bin/node

const fs = require('fs');

// Get the file path and string to write from command line arguments
const filePath = process.argv[2];
const contentToWrite = process.argv[3];

// Check if both file path and content are provided
if (!filePath || !contentToWrite) {
  console.error('Usage: ./1-writeme.js <file-path> <string-to-write>');
  process.exit(1);
}

// Write the content to the file in utf-8
fs.writeFile(filePath, contentToWrite, 'utf-8', (err) => {
  if (err) {
    // Print the error object if an error occurred during writing
    console.error(err);
    process.exit(1);
  }
  console.log('The file has been written successfully.');
});
