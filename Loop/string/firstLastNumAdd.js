let sum = 0;
let num = prompt("Enter a numbers");

let lastDigit = num % 10;
let firstDigit = num;
while(num >= 10){
    num = num / 10;
}
firstDigit = num;
sum = firstDigit + lastDigit;
console.log("sum of first and last digit : ", sum);