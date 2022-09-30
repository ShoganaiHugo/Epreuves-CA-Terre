function tri(arg) {
  if (arg.length !== 0 && typeof arg !== 'undefined') {

    var result = '';

    // Pour verifier qu'on insère bien que des int
    for (let i = 0; i < arg.length; i++) {
      if (!isNaN(arg[i]) === true) {
        result = 'ok';
      } else {
        result = 'ko';
      }
    }

    // On est sûr que les arguments sont bien saisi et du bon type, on passe à la verif
    if (result = 'ok') {

      for (let i = 0; i < arg.length; i++) {
        if (arg[i] < arg[i+1]) {
          // On stock le resultat pour pas avoir de réponse prématurée
          result = 'Triée !';
        } else {
          result = 'Pas triée !';
        }
      }

    } else {
      return 'erreur.'
    }
  } else {
    return 'erreur.';
  }

  // On affiche le resultat
  return result;

}

console.log(tri(process.argv.slice(2)));