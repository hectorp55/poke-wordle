export function getLetterColor(guessLetter, answerLetter, answer) {
    if (guessLetter === answerLetter) {
        return "green";
    }
    if (answer.includes(guessLetter)) {
        return "yellow";
    }
    return "grey";
}

export function getLetterColorWithIndex(guess, answer, index) {
    return getLetterColor(guess[index], answer[index], answer)
}