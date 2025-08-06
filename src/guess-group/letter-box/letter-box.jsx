import './letter-box.css';
import { getLetterColor } from './../../hooks/letterChecks.jsx'; 
import { WHITE } from './../../constants.jsx';

function LetterBox({guessLetter, answerLetter, answer, isSubmitted}) {
    return (
        <div className="letter-box">
            <button 
                className="letter"
                style={{backgroundColor: isSubmitted ? getLetterColor(guessLetter, answerLetter, answer) : WHITE}}
            >{guessLetter}</button>
        </div>
    )
}

export default LetterBox;