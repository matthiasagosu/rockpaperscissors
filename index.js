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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  const thisRoundWinner = getRoundWinner(humanChoice, computerChoice);
  displayRoundWinner(
    thisRoundWinner[0],
    thisRoundWinner[1],
    thisRoundWinner[2],
  );
  updateScores(thisRoundWinner[0]);
  console.log(humanScore, computerScore);
}

function getRoundWinner(humanChoice, computerChoice) {
  if (computerChoice === "rock" && humanChoice === "paper") {
    return ["human", "paper", "rock"];
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    return ["computer", "rock", "scissors"];
  } else if (computerChoice === "paper" && humanChoice === "scissors") {
    return ["human", "scissors", "paper"];
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    return ["computer", "paper", "rock"];
  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    return ["human", "rock", "scissors"];
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    return ["computer", "scissors", "paper"];
  } else {
    return ["tie", computerChoice, humanChoice];
  }
}

function displayRoundWinner(winner, winnerChoice, LoserChoice) {
  if (winner === "tie") {
    console.log(`This is a tie!!! You both chose ${winnerChoice}`);
  } else if (winner === "computer") {
    console.log(`You lose! ${winnerChoice} beats ${LoserChoice}`);
  } else if (winner === "human") {
    console.log(`You win! ${winnerChoice} beats ${LoserChoice}`);
  }
}

function updateScores(winner) {
  if (winner === "computer") {
    computerScore += 1;
  } else if (winner === "human") {
    humanScore += 1;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
