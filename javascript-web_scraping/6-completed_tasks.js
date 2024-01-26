#!/usr/bin/node

const request = require('request');

const [, , URL] = process.argv;

request.get(URL, (err, res, body) => {
  if (err) {
    console.error(err);
  }

  const resDict = {};
  const data = JSON.parse(body);

  data.forEach((task) => {
    if (task.completed) {
      typeof resDict[task.userId] === 'undefined'
        ? (resDict[task.userId] = 1)
        : (resDict[task.userId] += 1);
    }
  });

  console.log(resDict);
});
