/*
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
*/

let answer = Math.trunc(Math.random() * 20) + 1;
console.log(answer)
let score =20;
const checkFn = () => {
  let guessNumber = document.querySelector(".guess").value;
  if (answer == guessNumber && score > 0) {
    document.querySelector(".message").textContent =
      "congrats you won the game";
    document.querySelector('.highscore').textContent<score?document.querySelector('.highscore').textContent=score:""
  } else if (answer > guessNumber && score > 0) {
    score--;
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "too low";
  } else if (answer < guessNumber && score > 0) {
    score--;
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "too high";
  } else {
    document.querySelector(".message").textContent = "you lost the game";
  }
};
const againClicked=()=>{
    answer = Math.trunc(Math.random() * 20) + 1;
    console.log(answer)
    score =20
    document.querySelector(".score").textContent=20
    document.querySelector(".message").textContent = "start guessing";
    document.querySelector(".guess").value=''
}

