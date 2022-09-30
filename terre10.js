function premier(num) {
  if (num.length !== 0 && !isNaN(num) === true && process.argv.slice(3).length === 0) {
    
    if (num<2) return 'Non, ' + num + ' n’est pas un nombre premier.';

    for (let i = 2; i <= Math.sqrt(num); i++) 
        if (num % i == 0) return 'Non, ' + num + ' n’est pas un nombre premier.';
    return 'Oui, ' + num + ' est un nombre premier.';

  } else {

    return "Tu ne m'auras pas !"
  }
}

console.log(premier(process.argv.slice(2)));