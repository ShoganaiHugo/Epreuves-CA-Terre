let alphabet = 'abcdefghijklmnopqrstuvwxyz';

function sayAlphabet(str) {

  let newAlphabet = '';

  if (str.length !== 0 && isNaN(str) === true && typeof str[1] === 'undefined' && str[0].length === 1) {

    for (let i = alphabet.indexOf(str); i < alphabet.length; i++) {    
      newAlphabet += alphabet[i];
    }
    return newAlphabet;

  } else {
    return "Tu ne m'auras pas !"
  }
  
}

console.log(sayAlphabet(process.argv.slice(2)));