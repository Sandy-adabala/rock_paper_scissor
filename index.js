const choices = ['rock','paper','scissors'];
const playerdisplay = document.getElementById("playerDisplay");
const computerdisplay = document.getElementById("computerDisplay");
const resultdisplay = document.getElementById("resultDisplay");
const playerscoreDisplay = document.getElementById("playerscoreDisplay");
const computerscoreDisplay = document.getElementById("computerscoreDisplay");

let playerscore = 0;
let computerscore = 0;

function playGame(playerchoice) {
    const computerchoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    if(playerchoice === computerchoice) {
        result = "ITS A TIE!."
    } else if(playerchoice === 'rock' && computerchoice === 'scissors') {
        result = "YOU WIN!.";
    } else if(playerchoice === 'paper' && computerchoice === 'rock') {
        result = "YOU WIN!.";
    } else if(playerchoice === 'scissors' && computerchoice === 'paper') {
        result = "YOU WIN!.";
    } else{
        result = "YOU LOST!.";
    }

    playerdisplay.textContent = `PLAYER : ${playerchoice}`;
    computerdisplay.textContent = `COMPUTER : ${computerchoice}`;
    resultdisplay.textContent = result;

    resultdisplay.classList.remove("greenText","redText");
    
    switch(result) {
        case "YOU WIN!.":
            resultdisplay.classList.add("greenText");
            playerscore += 1;
            playerscoreDisplay.textContent = playerscore;
            break;
        case "YOU LOST!.":
            resultdisplay.classList.add("redText");
            computerscore += 1;
            computerscoreDisplay.textContent = computerscore;
            break;    
            
    }   
}