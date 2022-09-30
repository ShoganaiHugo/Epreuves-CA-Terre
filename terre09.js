function racineCarre(num) {
  if (num.length !== 0 && !isNaN(num) === true && process.argv.slice(3).length === 0) {
    return num ** 0.5;
  } else {
    return "Tu ne m'auras pas !"
  }
}

console.log(racineCarre(process.argv.slice(2)));