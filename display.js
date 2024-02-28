import {texts as t} from "./data.js";

export function welcomeMode() {
    clearScreen()
    document.querySelector("#welcomeMode").style.display = "initial";
    document.querySelector("#wm_title").textContent = t.welcomeMode.title;
    document.querySelector("#wm_playBtn").textContent = t.welcomeMode.playBtn;
}

export function settingsMode() {
    clearScreen()
    document.querySelector("#settingsMode").style.display = "initial";
    document.querySelector("#sm_maxTries").textContent = t.settingsMode.maxTries;
    document.querySelector("#sm_maxTriesInput").value = "";
    document.querySelector("#sm_maxNumber").textContent = t.settingsMode.maxNumber;
    document.querySelector("#sm_maxNumberInput").value = "";
    document.querySelector("#sm_startBtn").textContent = t.settingsMode.startBtn;
}

export function gameMode(maxNumber, tries, maxTries) {
    clearScreen()
    document.querySelector("#gameMode").style.display = "initial";
    document.querySelector("#gm_title").textContent = t.gameMode.title + maxNumber;
    document.querySelector("#gm_tries").textContent = t.gameMode.tries + tries + " / " + maxTries;
    document.querySelector("#gm_response").textContent = "";
    document.querySelector("#gm_responseInput").value = "";
    document.querySelector("#gm_verifyBtn").textContent = t.gameMode.verifyBtn;
}  

export function gameOver(guess, tries, maxTries, didWin) {
    clearScreen()
    document.querySelector("#gameOver").style.display = "initial";
    document.querySelector("#go_title").textContent = didWin ? t.gameOver.titles.win : t.gameOver.titles.lose;
    document.querySelector("#go_guess").textContent = t.gameOver.guess + guess;
    document.querySelector("#go_tries").textContent = t.gameOver.tries + tries + " / " + maxTries;
    document.querySelector("#go_playAgainBtn").textContent = t.gameOver.playAgainBtn;
}

export function displayResponse(greaterOrLess, tries, maxTries) {
    if (greaterOrLess === ">") {
        document.querySelector("#gm_response").textContent = t.gameMode.responses.greater;
    } else if (greaterOrLess === "<") {
        document.querySelector("#gm_response").textContent = t.gameMode.responses.less;
    }
    document.querySelector("#gm_response").classList.add("answerHighlight");
    setTimeout(()=>{document.querySelector("#gm_response").classList.remove("answerHighlight")}, 1000);

    document.querySelector("#gm_responseInput").value = "";
    document.querySelector("#gm_tries").textContent = t.gameMode.tries + tries + " / " + maxTries;
}

function clearScreen() {
    document.querySelector("#welcomeMode").style.display = "none";
    document.querySelector("#settingsMode").style.display = "none";
    document.querySelector("#gameMode").style.display = "none";
    document.querySelector("#gameOver").style.display = "none";
}