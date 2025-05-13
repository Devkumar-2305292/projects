function humanselection() {
  let choice = prompt("Enter your choice (Rock, Paper, or Scissors):");
  if (!choice) return null;
  choice = choice.trim().toLowerCase();
  choice = choice.charAt(0).toUpperCase() + choice.slice(1);
  if (!["Rock", "Paper", "Scissors"].includes(choice)) {
    alert("Invalid choice! Please enter Rock, Paper, or Scissors.");
    return humanselection();
  }
  return choice;
}

function computerselection() {
  const obj = {
    0: "Paper",
    1: "Rock",
    2: "Scissors",
  };
  let index = Math.floor(Math.random() * 3);
  const choice = obj[index];

  return choice;
}

function playRound(humanchoice, computerchoice) {
  if (humanchoice == computerchoice) {
    alert("It's a Draw");
    return;
  }
  if (
    (humanchoice === "Paper" && computerchoice === "Rock") ||
    (humanchoice === "Rock" && computerchoice === "Scissors") ||
    (humanchoice === "Scissors" && computerchoice === "Paper")
  ) {
    alert("You Won :)");
  } else {
    alert("You Lost :(");
  }
}

const humanchoice = humanselection();
const computerchoice = computerselection();

playRound(humanchoice, computerchoice);
