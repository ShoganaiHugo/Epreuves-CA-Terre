function div(){
  var dividende = parseInt(process.argv.slice(2));
  var diviseur = parseInt(process.argv.slice(3));

  if (diviseur == 0 || diviseur > dividende) {

    return "erreur";

  } else {

    let resultat = Math.floor(dividende / diviseur);
    let reste = dividende % diviseur;

    return "résultat : " + resultat + "\n" + "reste : " + reste;
  }
}


console.log(div());