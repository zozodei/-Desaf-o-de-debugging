const input = document.getElementById("guessInput")
const button = document.getElementById("guessBtn")
const message = document.getElementById("message")
const attemptsText = document.getElementById("attempts")
const reiniciar = document.getElementById("resetBtn")

let secretNumber = Math.floor(Math.random() * 100);

let attempts = 0

let numerosIntentados = "";

button.onclick = checkGuess;
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkGuess();
  }
});

reiniciar.onclick = reinicioJuego;

function checkGuess() {

  const guess = Number(input.value)

  if (numerosIntentados === "") {
    numerosIntentados = guess
  }
  else {
    numerosIntentados += ", " + guess;
  }

  if (guess >= 1 && guess <= 100) {

    attempts = attempts + 1

    attemptsText.innerText = attempts

    if (attempts < 10) {
      if (guess == secretNumber) {
        message.innerText = "¡Ganaste!";
        lanzarConfeti();
        message.classList.add("winner-zoom");
        setTimeout(() => message.classList.remove("winner-zoom"), 1200);
        setTimeout(() => { reinicioJuego(); }, 1000);
      }
      if (guess < secretNumber) {
        message.innerText = `El número es mayor
                    Numeros intentados:
                    ${numerosIntentados}`
        input.value = "";
      }

      if (guess > secretNumber) {
        message.innerText = `El número es menor
                    Numeros intentados:
                    ${numerosIntentados}`
        input.value = "";
      }

    }
    else {
      message.innerText = `Perdiste, el numero era ${secretNumber}`
      setTimeout(() => { reinicioJuego(); }, 2000);
    }
  }
  else {
    message.innerText = "Ingresaste un numero invalido!"
  }
}

function reinicioJuego() {

  secretNumber = Math.floor(Math.random() * 100);
  attempts = 0;
  attemptsText.innerText = attempts;
  message.innerText = "Nuevo juego, intenta adivinar";
  input.value = "";
  numerosIntentados = "";
}
function lanzarConfeti() {
  const colors = ["#ff0", "#f00", "#0f0", "#0ff", "#f0f", "#fff"];

  for (let i = 0; i < 50; i++) { // cantidad de piezas
    const confetti = document.createElement("div");
    confetti.classList.add("confetti-piece");

    // posición inicial
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = "-20px"; // que salga desde arriba

    // color y tamaño aleatorio
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    const size = 5 + Math.random() * 10;
    confetti.style.width = size + "px";
    confetti.style.height = size + "px";

    // duración aleatoria de la animación
    confetti.style.animationDuration = 2 + Math.random() * 3 + "s"; // 2-5s

    document.body.appendChild(confetti);

    // eliminar al terminar la animación
    confetti.addEventListener("animationend", () => confetti.remove());
  }
}