import './letter-box.css';

function LetterBox({guessLetter}) {
    return (
        <div className="letter-box">
            <span className="letter">{guessLetter}</span>
        </div>
    )
}

export default LetterBox;