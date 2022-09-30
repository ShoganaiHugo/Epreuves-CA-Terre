function puissance(arg1, arg2) {
  if (typeof arg1 !== 'undefined' && typeof arg2 !== 'undefinded' && !isNaN(arg1) === true && !isNaN(arg2) === true) {
    return arg1 ** arg2;
  } else {
    return "Tu ne m'auras pas !"
  }
}

console.log(puissance(process.argv.slice(2)[0], process.argv.slice(2)[1]));