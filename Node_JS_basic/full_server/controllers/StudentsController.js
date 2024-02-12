import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response, dataBase) {
    readDatabase(dataBase)
      .then((fields) => {
        const list = [];

        list.push('This is the list of our students');

        for (const fieldName in fields) {
          if (fieldName) {
            const msg = `Number of students in ${fieldName}: ${
              fields[fieldName].length
            }. List: ${fields[fieldName].join(', ')}`;

            list.push(msg);
          }
        }
        response.status(200).send(list.join('\n'));
      })
      .catch(() => response.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(request, response, dataBase) {
    const { major } = request.params;

    if (!['CS', 'SWE'].includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      readDatabase(dataBase)
        .then((fields) => {
          response.status(200).send(`List: ${fields[major].join(', ')}`);
        })
        .catch(() => response.status(500).send('Cannot load the database'));
    }
  }
}

export default StudentsController;
