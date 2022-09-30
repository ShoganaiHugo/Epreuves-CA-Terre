function middle(num0, num1, num2) {

  if (typeof num0 !== 'undefined' && typeof num1 !== 'undefinded' && typeof num2 !== 'undefinded' && !isNaN(num0) === true && !isNaN(num1) === true && !isNaN(num2) === true && typeof process.argv.slice(2)[3] === 'undefined') {
    
    num0 = Number(num0);
    num1 = Number(num1);
    num2 = Number(num2);

    if ( (num0 < num1 && num1 < num2) || (num0 > num1 && num1 > num2) || (num2 < num1 && num1 < num0) || (num2 > num1 && num1 > num0) ) {
      return num1;
    
    } else if ( (num1 < num0 && num0 < num2) || (num1 > num0 && num0 > num2) || (num2 < num0 && num0 < num1) || (num2 > num0 && num0 > num1) ) {
      return num0;
    
    } else if ( (num1 < num2 && num2 < num0) || (num1 > num2 && num2 > num0) || (num0 < num2 && num2 < num1) || (num0 > num2 && num2 > num1) ) {
      return num2;
    
    } else {
      return 'erreur.';
    }
  } else {
    return 'Erreur de syntaxe.';
  }
}

console.log(middle(process.argv.slice(2)[0], process.argv.slice(2)[1], process.argv.slice(2)[2]));