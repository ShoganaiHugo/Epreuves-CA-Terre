function div(dividende, diviseur){

  if (dividende.length !== 0 && diviseur.length !== 0 && typeof dividende === 'number' && typeof diviseur === 'number') {
    if (diviseur == 0 || diviseur > dividende) {

      return "erreur";

    } else {

      const resultat = Math.floor(dividende / diviseur);
      const reste = dividende % diviseur;

      return "résultat : " + resultat + "\n" + "reste : " + reste;
    }
  
  } else {
    return 'erreur.';
  }

  
}


console.log(div(parseInt(process.argv.slice(2)), parseInt(process.argv.slice(3))));