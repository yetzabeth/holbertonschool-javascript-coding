console.log('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name != null) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
