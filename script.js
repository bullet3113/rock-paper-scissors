// const rock = document.getElementById('rock');
// const paper = document.getElementById('paper');
// const scissors = document.getElementById('scissors');

// const btn = document.

const score = document.getElementById('score');
const result = document.getElementById('result');

const reset = document.getElementById('reset-btn');

const computerChoice = () => {
    let choice = Math.ceil(Math.random() * 3);
    console.log(choice);
    if (choice === 1) {
        return 'rock';
    } else if (choice === 2) {
        return 'paper';
    } else return 'scissors';
}

const playerChoice = () => {
    let choice = prompt('Rock, Paper, Scissors?');
    return choice;
    
}

function gamePlay(computerChoice, playerChoice) {
    if (computerChoice == 'rock' && playerChoice == 'paper') {
        console.log('P wins');
    } else if (computerChoice == 'paper' && playerChoice == 'scissors') {
        console.log('P wins');
    } else if (computerChoice == 'scissors' && playerChoice == 'rock') {
        console.log('P wins')
    } else if (computerChoice == playerChoice) {
        console.log('Tie');
    } else console.log('C wins');
}

function playRound() {
    for (let i = 0; i < 5; i++) {
        console.log(gamePlay(computerChoice(), playerChoice()));
        }
}

playRound();
