function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3) + 1;
  switch (computerChoice) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";

    default:
      console.log("Nothing was printed");
  }
}

function getHumanChoice() {
  const humanChoice = prompt(
    "Choose rock, paper, or scissors",
  ).toLocaleLowerCase();
  switch (humanChoice) {
    case "rock":
      return "rock";
      break;
    case "paper":
      return "paper";
      break;
    case "scissors":
      return "scissors";

    default:
      return "invalid";
  }
}

console.log(getHumanChoice());
