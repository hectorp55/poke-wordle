import './letter-input.css';

function LetterInput({ letter }) {
    return (
        <span className="letter-input input-button">{letter}</span>
    )
}

export default LetterInput;