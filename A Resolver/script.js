const input = document.getElementById("guessInput")
const button = document.getElementById("guessBtn")
const message = document.getElementById("message")
const attemptsText = document.getElementById("attempts")
const reiniciar = document.getElementById("resetBtn")

let secretNumber = Math.floor(Math.random() * 100); 

let attempts = 0

button.onclick = checkGuess;

reiniciar.onclick = reinicioJuego;

function checkGuess(){

  const guess = input.value

  attempts = attempts + 1

  attemptsText.innerText = attempts

  if (guess == secretNumber)
  {
    message.innerText = "¡Ganaste!";
    setTimeout(() => { reinicioJuego(); }, 1000);
  }
  if(guess < secretNumber){
    message.innerText = "El número es mayor"
  }

  if(guess > secretNumber){
    message.innerText = "El número es menor"
  }

}

function reinicioJuego () 
{
  
  secretNumber = Math.floor(Math.random() * 100); 
  attempts = 0; 
  attemptsText.innerText = attempts;
  message.innerText = "Nuevo juego, intenta adivinar";
  input.value = "";
}