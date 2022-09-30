let source = process.argv;

function split(arr) {                     //Je transforme ma chaine de caractère en tableau
  for ( let i = 0; arr.includes("/"); i++) {
    const arrayOfWord = arr.split("/");
    return arrayOfWord;
  }
}

let max = split(source[1]).length - 1;   //L'index commence à 0

console.log(split(source[1])[max])