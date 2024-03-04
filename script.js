const rock = document.querySelector('#rock');
const paper= document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const displayResults = document.querySelector('#display-results');

let computerScore = 0;
let playerScore = 0;

rock.addEventListener('click', () => {
   displayResults.textContent = `${playRound('Rock')} Score: ${playerScore} - ${computerScore}`;
})

paper.addEventListener('click', () => {
   displayResults.textContent = `${playRound('Paper')} Score: ${playerScore} - ${computerScore}`;
})

scissors.addEventListener('click', () => {
   displayResults.textContent = `${playRound('Scissors')} Score: ${playerScore} - ${computerScore}`;
})

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
                    playerScore++;
                    return "You Lose! Paper beats Rock";
                }
                if (computerChoice === "Scissors") {
                    computerScore++;
                    return "You Win! Rock beats Paper";
                }
                break;
            case "Paper":
                if (computerChoice === "Rock") {
                    playerScore++;
                    return "You Win! Paper beats Rock";
                }
                if (computerChoice === "Scissors") {
                    computerScore++;
                    return "You Lose! Scissors beats Paper";
                }
                break;
            case "Scissors":
                if (computerChoice === "Paper") {
                    playerScore++;
                    return "You Win! Scissors beats Paper";
                }
                if (computerChoice === "Rock") {
                    computerScore++;
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

function playRound(playerSelection) {
    let computerChoice = getComputerChoice();
    let outcome = calcOutcome(playerSelection, computerChoice);
    if (playerScore === 5 || computerScore === 5) {
        return isWin();
    }
    return outcome;
}

function isWin() {
    if (playerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        return 'Player wins!';
    }

    if (computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        return 'Computer wins!';
    }
}

