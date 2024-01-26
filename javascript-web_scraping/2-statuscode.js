#!/usr/bin/node

const request = require('request');

const [, , URL] = process.argv;

request.get(URL, (err, res, body) => {
  if (err) {
    console.error(err);
  }
  console.log(`code: ${res.statusCode}`);
});
