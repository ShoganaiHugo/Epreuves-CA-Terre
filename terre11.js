function to12h(time) {
  if (time.length !== 0 && process.argv.slice(3).length === 0) {

    var index = time[0].indexOf(":");

    if (index !== -1) {
      arr = time[0].split(':');

      if (arr.length = 2) {

        if (arr[0] > 12 && arr[0] <= 24 && arr[1] >= 0 && arr[1] <= 59) {
          return arr[0]%12 + ':' + arr[1] + 'PM';
        } else if (arr[0] >= 0 && arr[0] <= 12 && arr[1] >= 0 && arr[1] <= 59) {
          return arr[0] + ':' + arr[1] + 'AM';
        } else {
          return 'Erreur de syntaxte.'
        }

      } else {
        return "Format incorrecte.";
      }

    } else {
      return "Format incorrecte.";
    }

  } else {
    return "Tu ne m'auras point.";
  }  
}

console.log(to12h(process.argv.slice(2)));