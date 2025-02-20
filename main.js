// Espera o documento estar pronto antes de executar o script
const rollButton = document.getElementById("roll_button");
const rollNumber = document.getElementById("roll_number");
const diceType = document.getElementById("dice_type");
const historyRoll = document.getElementById("history_roll");

function rollDice() {
  // Pega o valor selecionado no select
  const maxNumber = parseInt(diceType.value);
  const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
  rollNumber.textContent = randomNumber;

  const rollEntry = document.createElement("h3");
  rollEntry.textContent = `D${maxNumber}: ${randomNumber}`;

  historyRoll.appendChild(rollEntry);

  while (historyRoll.children.length > 5) {
    historyRoll.removeChild(historyRoll.firstChild); // Remove sempre o primeiro <h3>
  }
}

rollButton.addEventListener("click", rollDice);
