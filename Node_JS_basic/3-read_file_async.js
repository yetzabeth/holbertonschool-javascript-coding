const path = require('path');
const fs = require('fs').promises;

const countStudents = (file) => fs.readFile(path.normalize(file), 'utf-8')
  .then((data) => {
    const dataArray = data
      .trim()
      .split('\n')
      .map((line) => line.split(','));

    console.log(
      `Number of students: ${dataArray.length ? dataArray.length - 1 : 0}`,
    );

    const fields = {};

    dataArray.forEach((line) => {
      const fieldName = line[3];

      if (!fields[fieldName]) fields[fieldName] = [];

      fields[fieldName].push(line[0]);
    });

    delete fields.field;

    for (const fieldName in fields) {
      if (fieldName) {
        console.log(
          `Number of students in ${fieldName}: ${
            fields[fieldName].length
          }. List: ${fields[fieldName].join(', ')}`,
        );
      }
    }
  })
  .catch(() => { throw new Error('Cannot load the database'); });

module.exports = countStudents;
