import './keyboard.css'
import LetterInput from './letter-input/letter-input.jsx';
import ActionButton from './action-button/action-button.jsx';
import { useEffect } from 'react';

const topKeys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const middleKeys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const bottomKeys = ["Z", "X", "C", "V", "B", "N", "M"];

function Keyboard({addLetterToGuess, deleteLetterFromGuess, submitGuess, greenLetters, yellowLetters, greyLetters}) {
    function getColor(letter) {
        if (greenLetters.includes(letter)) {
            return "green"
        }
        if (yellowLetters.includes(letter)) {
            return "yellow"
        }
        if (greyLetters.includes(letter)) {
            return "grey"
        }
        return "light grey"
    }

    return (
        <div className="keyboard">
            <div className="keyboard-row top">
                {topKeys.map((key) => {
                    const bgColor = getColor(key);
                    return <LetterInput key={`keyboard-key-${key}-${bgColor}`} letter={key} onLetterClicked={addLetterToGuess} bgColor={bgColor}></LetterInput>
                })}
            </div>
             <div className="keyboard-row middle">
                {middleKeys.map((key) => {
                    const bgColor = getColor(key);
                    return <LetterInput key={`keyboard-key-${key}-${bgColor}`} letter={key} onLetterClicked={addLetterToGuess} bgColor={bgColor}></LetterInput>
                })}
            </div>
            <div className="keyboard-row bottom">
                <ActionButton actionName="Enter" actionMethod={submitGuess}></ActionButton>
                {bottomKeys.map((key) => {
                    const bgColor = getColor(key);
                    return <LetterInput key={`keyboard-key-${key}-${bgColor}`} letter={key} onLetterClicked={addLetterToGuess} bgColor={bgColor}></LetterInput>
                })}
                <ActionButton actionName="Delete" actionMethod={deleteLetterFromGuess}></ActionButton>
            </div>
        </div>
    )
}

export default Keyboard;