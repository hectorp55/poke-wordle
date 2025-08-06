import './letter-input.css';

function LetterInput({ letter, onLetterClicked, bgColor }) {
    function onClick() {
        onLetterClicked(letter);
    }

    return (
        <button 
            className="letter-input input-button" 
            onClick={onClick}
            style={{backgroundColor: bgColor}}
            >
            {letter}
        </button>
    )
}

export default LetterInput;