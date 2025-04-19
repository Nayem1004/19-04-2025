let number = 4529;
let numberStr = number.toString()
let firstDigit = parseInt(numberStr[0]);

let lastDigit = parseInt(numberStr[numberStr.length - 1]);


let sum = firstDigit + lastDigit;


console.log("First Digit:", firstDigit);
console.log("Last Digit:", lastDigit);
console.log("Sum of mumber :", sum);