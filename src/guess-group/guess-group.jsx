import './guess-group.css';
import LetterBox from './letter-box/letter-box';

function GuessGroup({ guess, guessCount, letterCount }) {
    const letterCounts = Array.from({ length: letterCount }, (_, i) => i + 1)

    return (
        <div className="guess-group">
            {letterCounts.map((letterCount, index) => {
                return <LetterBox 
                            key={"row" + index + "column" + guessCount } 
                            guessLetter={guess.length >= letterCount + 1 ? guess[letterCount] : ""}
                        ></LetterBox>
            })}
        </div>
    )
}

export default GuessGroup;