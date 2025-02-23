const rollButton = document.getElementById("roll_button");
const rollNumber = document.getElementById("roll_number");
const diceType = document.getElementById("dice_type");
const historyRoll = document.getElementById("history_roll");

// Carregar o som de rolagem
const diceSound = new Audio("/Songs/dicesong1.mp3");

function rollDice() {
  const maxNumber = parseInt(diceType.value);
  let animationTime = 500; // Tempo da animação (0.5s)

  // Toca o som de rolagem
  diceSound.currentTime = 0; // Reinicia o som caso já tenha tocado antes
  diceSound.play();

  // Faz a animação de rolagem (mostrando números aleatórios)
  let count = 0;
  const interval = setInterval(() => {
    const fakeNumber = Math.floor(Math.random() * maxNumber) + 1;
    rollNumber.textContent = fakeNumber;
    count++;

    if (count >= animationTime / 50) {
      clearInterval(interval); // Para a animação
      const finalNumber = Math.floor(Math.random() * maxNumber) + 1;
      rollNumber.textContent = finalNumber;

      // Criar H3 no histórico
      const rollEntry = document.createElement("h3");
      rollEntry.textContent = `D${maxNumber}: ${finalNumber}`;
      historyRoll.appendChild(rollEntry);

      // Rolar automaticamente para o final
      historyRoll.scrollTop = historyRoll.scrollHeight;
    }
  }, 50);
}

rollButton.addEventListener("click", rollDice);
