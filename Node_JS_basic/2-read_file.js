const fs = require('fs');

function countStudents(path) {
  try {
    const stdData = fs.readFileSync(path, 'utf-8');
    const stdSplitData = stdData.split('\n').slice(1);

    console.log(`Number of students: ${stdSplitData.length}`);

    const fields = {};

    stdSplitData.forEach((e) => {
      const stdValue = e.split(',');
      const stdKey = stdValue[stdValue.length];

      if (!Object.keys(fields).includes(stdKey)) {
        fields[stdKey] = [];
        fields[stdKey].push(stdValue[0]);
      } else {
        fields[stdKey].push(stdValue[0]);
      }
    });

    for (const [key, obj] of Object.entries(fields)) {
      console.log(`Number of students in ${key}: ${obj.length}. List: ${obj.join(', ')}`);
    }
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = countStudents;
