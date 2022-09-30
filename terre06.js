function reverseStr() {
  var str = String(process.argv.slice(2)); // Au cas où le paramètre ne serait pas une str
  var reverse = [];

  for (let i = 1; i <= str.length; i++ ) {  // Pour écrire à l'envers
    reverse += str[str.length - i];
  }

  return reverse;
}

console.log(reverseStr());