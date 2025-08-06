import { GREEN, YELLOW, GREY } from './../constants';

export function getLetterColor(guessLetter, answerLetter, answer) {
    if (guessLetter === answerLetter) {
        return GREEN;
    }
    if (answer.includes(guessLetter)) {
        return YELLOW;
    }
    return GREY;
}

export function getLetterColorWithIndex(guess, answer, index) {
    return getLetterColor(guess[index], answer[index], answer)
}