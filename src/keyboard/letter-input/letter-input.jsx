import './letter-input.css';

function LetterInput({ letter, onLetterClicked }) {

    function onClick() {
        onLetterClicked(letter);
    }

    return (
        <span className="letter-input input-button" onClick={onClick}>{letter}</span>
    )
}

export default LetterInput;