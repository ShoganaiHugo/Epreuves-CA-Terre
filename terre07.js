function tailleStr(str) {
  if (str.length !== 0 && !isNaN(str) === false && process.argv.slice(3).length === 0){
    return str[0].length;
  } else {
    return "erreur.";
  }    
}

console.log(tailleStr(process.argv.slice(2)));