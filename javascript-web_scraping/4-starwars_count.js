#!/usr/bin/node

const request = require('request');

const [, , URL] = process.argv;

request.get(URL, (err, res, body) => {
  if (err) {
    console.error(err);
  }

  let wedgeCounter = 0;
  const data = JSON.parse(body).results;

  data.forEach((elem) => {
    if (elem.characters.find((e) => e.search('18') !== -1)) { wedgeCounter++; }
  });

  console.log(wedgeCounter);
});
