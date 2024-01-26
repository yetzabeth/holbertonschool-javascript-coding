#!/usr/bin/node

const fs = require('fs');
const request = require('request');

const [, , URL, filePath] = process.argv;

request.get(URL, (err, res, body) => {
  if (err) {
    console.error(err);
  }

  fs.writeFile(filePath, body, 'utf-8', (err) => {
    if (err) { console.error(err); }
  });
});
