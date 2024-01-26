#!/usr/bin/node

const fs = require('fs');

const [, , filePath, strToWrite] = process.argv;

fs.writeFile(filePath, strToWrite, 'utf-8', (err) => {
  if (err) {
    console.log(err);
  }
});
