let alphabet = 'abcdefghijklmnopqrstuvwxyz';   //Je vais parcourir la chaîne de caractère avec une boucle pour en compléter une autre
let newAlphabet = '';

function sayAlphabet(str) {
  for ( let i = 0; i < str.trim().length; i++) {    //Une string commence par 0 doc .trim me permet de compter à partir de 0
    newAlphabet += str[i];
  }
  return newAlphabet;
}

console.log(sayAlphabet(alphabet));