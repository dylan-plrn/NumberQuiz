export let state = {}

export function newGame(maxTries, maxNumber) {
    state.maxTries = maxTries;
    state.maxNumber = maxNumber;
    state.tries = 0;
    state.numberToGuess = Math.floor(Math.random() * state.maxNumber)+1;
}

export function nextGuess(userNumber) {
    state.tries += 1;
    if (userNumber === state.numberToGuess) {
        return "win";
    } else {
        if (state.tries >= state.maxTries) {
            return "lose";
        } else {
            if (userNumber < state.numberToGuess) {
                return ">";
            } else if (userNumber > state.numberToGuess) {
                return "<";
            }
        }
    }
}



