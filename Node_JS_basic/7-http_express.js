const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', async (request, response) => {
  response.write('This is the list of our students\n');
  try {
    let data = '';

    console.log = (message) => {
      data += `${message}\n`;
    };

    await countStudents(process.argv[2]);

    response.end(data.trim());
  } catch (error) {
    response.end(error.message);
  }
});

app.listen(1245);

module.exports = app;
