import './keyboard.css'
import LetterInput from './letter-input/letter-input.jsx';
import ActionButton from './action-button/action-button.jsx';

const topKeys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const middleKeys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const bottomKeys = ["Z", "X", "C", "V", "B", "N", "M"];

function Keyboard({addLetterToGuess, deleteLetterFromGuess, submitGuess}) {

    return (
        <div className="keyboard">
            <div className="keyboard-row top">
                {topKeys.map((key) => {
                    return <LetterInput key={key} letter={key} onLetterClicked={addLetterToGuess}></LetterInput>
                })}
            </div>
             <div className="keyboard-row middle">
                {middleKeys.map((key) => {
                    return <LetterInput key={key} letter={key} onLetterClicked={addLetterToGuess}></LetterInput>
                })}
            </div>
            <div className="keyboard-row bottom">
                <ActionButton actionName="Enter" actionMethod={submitGuess}></ActionButton>
                {bottomKeys.map((key) => {
                    return <LetterInput key={key} letter={key} onLetterClicked={addLetterToGuess}></LetterInput>
                })}
                <ActionButton actionName="Delete" actionMethod={deleteLetterFromGuess}></ActionButton>
            </div>
        </div>
    )
}

export default Keyboard;