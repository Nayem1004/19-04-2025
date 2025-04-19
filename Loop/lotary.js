let  lottaryNumber = 25;
let userNum = prompt("guess the number : ");

while (userNum != lottaryNumber){
    userNum = prompt("you enter wrong number, guess again : ");
}
console.log("congratulation, you are the win");