const path = require('path');
const fs = require('fs').promises;

const readDatabase = (file) => fs.readFile(path.normalize(file), 'utf-8')
  .then((data) => {
    const dataArray = data
      .trim()
      .split('\n')
      .map((line) => line.split(','));

    const fields = {};

    dataArray.forEach((line) => {
      const fieldName = line[3];

      if (!fields[fieldName]) fields[fieldName] = [];

      fields[fieldName].push(line[0]);
    });

    delete fields.field;

    return fields;
  })
  .catch((error) => { throw error; });

module.exports = readDatabase;
