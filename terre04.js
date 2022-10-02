function pairImpair(num) {

  if (parseInt(num) != num) {
    return "Tu ne me la mettras pas à l’envers." ;
  } else {

    if (num % 2 == 0) {
      return "pair";
    } else {
      return "impair";
    }

  }
}


console.log(pairImpair(process.argv.slice(2)));