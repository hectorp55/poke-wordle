import './letter-box.css';
import { getLetterColor } from './../../hooks/letterChecks.jsx'; 

function LetterBox({guessLetter, answerLetter, answer, isSubmitted}) {
    return (
        <div className="letter-box">
            <button 
                className="letter"
                style={{backgroundColor: isSubmitted ? getLetterColor(guessLetter, answerLetter, answer) : "white"}}
            >{guessLetter}</button>
        </div>
    )
}

export default LetterBox;