import * as display from "./display.js";
import * as game from "./game.js";

function gameIntro() {
    display.welcomeMode();
    document.querySelector("#wm_playBtn").onclick = gameSettings;
}

function gameSettings() {    
    display.settingsMode();
    document.querySelector("#sm_startBtn").onclick = startGame
}

function startGame() {
    let maxTries = parseInt(document.querySelector("#sm_maxTriesInput").value.trim());
    let maxNumber = parseInt(document.querySelector("#sm_maxNumberInput").value.trim());
    
    if (typeof !isNaN(maxTries) && !isNaN(maxNumber) && maxNumber >= 1 && maxTries >= 1) {
        game.newGame(maxTries, maxNumber);
        display.gameMode(game.state.maxNumber, game.state.tries, game.state.maxTries);
        document.querySelector("#gm_verifyBtn").onclick = verifyAnswer;
    }
}

function verifyAnswer() {
    let userAnswer = document.querySelector("#gm_responseInput").value;
    webGuess(userAnswer);
}

function webGuess(userAnswer) {
    let userNumber = parseInt(userAnswer.trim());

    if (!isNaN(userNumber)) {
        let result = game.nextGuess(userNumber);
        switch (result) {
            case ">":
                display.displayResponse(">", game.state.tries, game.state.maxTries);
                break;
            case "<": 
                display.displayResponse("<", game.state.tries, game.state.maxTries);
                break;
            case "win":
                gameOver(true);
                break;
            case "lose":
                gameOver(false);
                break;
        }
    }
}

function gameOver(didWin) {
    display.gameOver(game.state.numberToGuess, game.state.tries, game.state.maxTries, didWin);
    document.querySelector("#go_playAgainBtn").onclick = gameSettings;
}

window.onload = gameIntro();