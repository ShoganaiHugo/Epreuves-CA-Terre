let alphabet = 'abcdefghijklmnopqrstuvwxyz';

var start = alphabet.indexOf(process.argv.slice(2));

function sayAlphabet(str) {
  for ( i = start, newAlphabet = ''; i < str.trim().length; i++) {    
    newAlphabet += str[i];
  }
  return newAlphabet;
}

console.log(sayAlphabet(alphabet));