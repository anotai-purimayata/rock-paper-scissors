function getComputerChoice() {
    let computerChoice = getRandomInt(1, 3);
    switch (computerChoice) {
        case 1: return "Rock";
            break;
        case 2: return "Paper"; 
            break;
        case 3: return "Scissors";
            break;
        default:
            break;
    }
}

function calcOutcome(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Tie";
    } else {
        switch (playerChoice) {
            case "Rock":
                if (computerChoice === "Paper") {
                    return "You Lose! Paper beats Rock";
                }
                if (computerChoice === "Scissors") {
                    return "You Win! Rock beats Paper";
                }
                break;
            case "Paper":
                if (computerChoice === "Rock") {
                    return "You Win! Paper beats Rock";
                }
                if (computerChoice === "Scissors") {
                    return "You Lose! Scissors beats Paper";
                }
                break;
            case "Scissors":
                if (computerChoice === "Paper") {
                    return "You Win! Scissors beats Paper";
                }
                if (computerChoice === "Rock") {
                    return "You Lose! Rock beats Scissors";
                }
                break;
            default:
                return "ERROR";
                break;
        }
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function playRound() {
    let playerChoice = capitalize(prompt("Choose Rock, Paper or Scissors!"));
    let computerChoice = getComputerChoice();
    return calcOutcome(playerChoice, computerChoice);
    
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
}

playGame();