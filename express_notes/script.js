/* eslint-disable strict */
console.log(process.argv);

const [node, file, action, ...args] = process.argv;
const phrase = args.join(' ');

console.log(action, phrase);

switch (action) {
case 'shout':
  console.log(`${phrase.toUpperCase()}!!!`);
  break;
case 'slow':
  console.log(`${phrase.split('').join(' ')}`);
  break;
case 'canuck':
  console.log(canuck(phrase));
  break;
default:
  console.log(phrase);
  break;
}

function canuck(str) {
  return `${str}, eh?`;
}
