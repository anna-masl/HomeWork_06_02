const massiveVariable = [1, null, 5, true, undefined, 3];
let numberOfDigit = 0;
let sumOfDigit = 0;

console.log(massiveVariable);

function calcAverage(massiveVariable){
    for (let i = 0 ; i < massiveVariable.length ; i++) {
    if (typeof(massiveVariable[i]) === 'number' || Number.isFinite(massiveVariable[i])){
      numberOfDigit ++;
      sumOfDigit += +massiveVariable[i];
    }
  } 
  return sumOfDigit/numberOfDigit;
}

console.log(` Average value is ${calcAverage(massiveVariable)} \n Number of Digital is ${numberOfDigit} \n Sum of Digital is ${sumOfDigit}`);
