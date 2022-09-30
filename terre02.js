let maPhrase = "Bonjour je suis super content !";

function afficher(arrayOfWord) {
  let arrayOfWord = arrayOfWord.split(" ");
  for ( let i = 0; i != arrayOfWord.length; i++ ) {
    console.log(arrayOfWord[i]);
  }
}

afficher(maPhrase);