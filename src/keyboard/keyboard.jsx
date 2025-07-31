import './keyboard.css'
import LetterInput from './letter-input/letter-input.jsx';

const keys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];

const topKeys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const middleKeys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const bottomKeys = ["Z", "X", "C", "V", "B", "N", "M"];

function Keyboard() {
    return (
        <div class="keyboard">
            <div class="keyboard-row top">
                {topKeys.map((key) => {
                    return <LetterInput key={key} letter={key}></LetterInput>
                })}
            </div>
             <div class="keyboard-row middle">
                {middleKeys.map((key) => {
                    return <LetterInput key={key} letter={key}></LetterInput>
                })}
            </div>
             <div class="keyboard-row bottom">
                {bottomKeys.map((key) => {
                    return <LetterInput key={key} letter={key}></LetterInput>
                })}
            </div>
        </div>
    )
}

export default Keyboard;