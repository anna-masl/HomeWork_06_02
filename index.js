const massiveVariable = [1, null, 5, true, undefined, 3];


console.log(massiveVariable);

function calcAverage(massiveVariable) {
  let numberOfDigit = 0;
  let sumOfDigit = 0;
  for (let i = 0; i < massiveVariable.length; i++) {
    if (
      typeof massiveVariable[i] === 'number' ||
      Number.isFinite(massiveVariable[i])
    ) {
      numberOfDigit++;
      sumOfDigit += +massiveVariable[i];
    }
  }
  return sumOfDigit / numberOfDigit;
}

console.log(` Average value is ${calcAverage(massiveVariable)} \n Number of Digital is ${numberOfDigit} \n Sum of Digital is ${sumOfDigit}`);
