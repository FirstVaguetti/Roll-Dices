// Espera o documento estar pronto antes de executar o script
document.addEventListener("DOMContentLoaded", function () {
  const rollButton = document.getElementById("roll_button");
  const rollNumber = document.getElementById("roll_number");
  const diceType = document.getElementById("dice_type");

  function rollDice() {
    // Pega o valor selecionado no select
    const maxNumber = parseInt(diceType.value);
    const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    rollNumber.textContent = randomNumber;
  }

  rollButton.addEventListener("click", rollDice);
});
fdfdffdf