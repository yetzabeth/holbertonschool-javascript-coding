const path = require('path');
const fs = require('fs');

const countStudents = (file) => {
  let data;

  try {
    data = fs.readFileSync(path.normalize(file), 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

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
};

module.exports = countStudents;
