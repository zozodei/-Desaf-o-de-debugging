const input = document.getElementById("guessinput")
const button = document.getElementById("guessBtn")
const message = document.getElementById("message")
const attemptsText = document.getElementById("attempts")

let secretNumber = Math.random() * 100
let attempts = 0

button.addEventListener("click", checkGuess())

function checkGuess(){

  const guess = input.value

  attempts = attempts + 1

  attemptsText.innerText = attempts

  if(guess === secretNumber){
    message.innerText = "¡Ganaste!"
  }

  if(guess < secretNumber){
    message.innerText = "El número es mayor"
  }

  if(guess > secretNumber){
    message.innerText = "El número es menor"
  }

}