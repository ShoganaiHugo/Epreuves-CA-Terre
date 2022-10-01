function afficher(arrayOfWord) {
  // On vérifie qu'il existe bien un paramètre
  if (arrayOfWord.length !== 0) {
    
    // On affiche les paramètres lignes par ligne
    for ( let i = 0; i !== arrayOfWord.length; i++ ) {
      console.log(arrayOfWord[i]);
    }
  } else {

    // On gère les erreurs de saisi
    console.log('Merci de saisir des arguments.');
  }
  
}

return afficher(process.argv.slice(2));