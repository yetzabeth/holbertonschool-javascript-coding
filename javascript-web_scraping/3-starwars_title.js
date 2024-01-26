#!/usr/bin/node

const request = require('request');

const [, , movieId] = process.argv;
const URL = 'https://swapi-api.hbtn.io/api/films/';

request.get(URL + movieId, (err, res, body) => {
  if (err) {
    console.error(err);
  }
  console.log(JSON.parse(body).title);
});
