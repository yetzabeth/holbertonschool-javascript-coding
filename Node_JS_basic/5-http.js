const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http
  .createServer((request, response) => {
    if (request.url === '/') {
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/plain');
      response.end('Hello Holberton School!');
    } else if (request.url === '/students') {
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/plain');
      response.write('This is the list of our students\n');
      let data = '';
      console.log = (message) => { data += `${message}\n`; };
      countStudents(process.argv[2])
        .then(() => {
          response.end(data.trim());
        })
        .catch((error) => {
          response.statusCode = 400;
          response.end(error.message);
        });
    } else {
      response.statusCode = 404;
      response.setHeader('Content-Type', 'text/plain');
      response.end('Not Found');
    }
  })
  .listen(1245);

module.exports = app;
