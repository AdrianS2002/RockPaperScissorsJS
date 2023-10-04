const playerTxt = document.querySelector("#player");
const computerTxt = document.querySelector("#computer");
const resultTxt = document.querySelector("#result");

const btns = document.querySelectorAll(".Buttons")

let player;
let computer;
let result;

btns.forEach(button =>button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerTxt.textContent = `Player: ${player}`;
    computerTxt.textContent = `Computer: ${computer}`;
    resultTxt.textContent = winner();
}))

function computerTurn()
{
    const randomNumber = Math.floor(Math.random()*3)+1;
    if ( randomNumber == 1)
    {
        computer = "ROCK";
    }
    if( randomNumber == 2)
    {
        computer = "SCISSORS";
    }

    if(randomNumber ==3)
    {
        computer = "PAPER";
    }
}

function winner()
{
    if(player == computer){
        return "DRAW!"
    }
    else if(computer == "ROCK"){
        return (player == "PAPER") ? "You Win!" : "You Lose!"
    }
    else if(computer == "PAPER"){
        return (player == "SCISSORS") ? "You Win!" : "You Lose!"
    }
    else if(computer == "SCISSORS"){
        return (player == "ROCK") ? "You Win!" : "You Lose!"
    }
}