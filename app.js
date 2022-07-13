
var playerScore = 0;
var computerScore = 0;

var rock = document.querySelector('.rock');
var paper = document.querySelector('.paper');
var scissors = document.querySelector('.scissors');
var userChoice = [rock, paper, scissors];

// result querySelector.
var result1 = document.querySelector('.result1');
var result2 = document.querySelector('.result2');

// Initial game start.
function startGame(button) {
    button.style.display = 'none';
    document.getElementById('game').style.display = 'block';
    playGame();
}

// After clicking startGame()
function playGame() {
    userChoice.forEach(choice => {
        choice.addEventListener('click', handleClick)
    })
}

// Handle the click event.
function handleClick(event) {
    event = event.target.innerHTML.toLowerCase();
    checkWin(event);
    // console.log(event);
    // console.log(gameLeft);
}

// Computer selection.
function computerSelection() {
    var selection = ['rock', 'paper', 'scissors'];
    var choiceNum = selection[Math.floor(Math.random() * selection.length)];
    return choiceNum;
}

// Check if player or computer won.
function checkWin(player) {

    var computerChoice = computerSelection();

    var check = `${player} ${computerChoice}`
    // console.log(check);
    result1.innerHTML = `You chose ${player} and Computer chose ${computerChoice}.`;

    switch (check) {
        // win case.
        case 'scissors paper':
        case 'rock scissors':
        case 'paper rock':
            result2.innerHTML = `You WON!`;
            playerScore++;
            break;
        // lose case.
        case 'paper scissors':
        case 'rock paper':
        case 'scissors rock':
            result2.innerHTML = `You LOST!`;
            computerScore++;
            break;
        // draw case.
        case 'paper paper':
        case 'scissors scissors':
        case 'rock rock':
            result2.innerHTML = `It's a DRAW!`;
            break;
    }

    document.querySelector('.playerCount').innerHTML = playerScore;
    document.querySelector('.computerCount').innerHTML = computerScore;

    checkScore();

}

// Check score.
function checkScore() {
    if (playerScore == 2 || computerScore == 2) {
        result1.style.display = 'none';
        if (playerScore == 2) {
            document.querySelector('.playerScore').classList.add('playerWin');
        } else if (computerScore == 2) {
            document.querySelector('.computerScore').classList.add('computerWin');
        }
        gameOver();
    } else {
        playGame();
    }
}

// Game Over.
function gameOver() {
    rock.style.display = 'none';
    scissors.style.display = 'none';
    paper.style.display = 'none';

    document.querySelector('.choice').style.display = 'none';
    document.querySelector('.result2').classList.add('finalResult');
    document.querySelector('.playAgain').style.display = 'inline-block';
}

// Play Again.
document.querySelector('.playAgain').addEventListener('click', function () {
    location.reload();

});