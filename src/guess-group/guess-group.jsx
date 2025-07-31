import './guess-group.css';
import LetterBox from './letter-box/letter-box';

function GuessGroup({ guess, column, letterCount }) {
    return (
        <div className="guess-group">
            {Array.from({length: letterCount}).map((_, index) => {
              return <LetterBox 
                        key={`row${index}column${column}`} 
                        guessLetter={guess.length >= index + 1 ? guess[index] : ""}>
                    </LetterBox>
          })}
        </div>
    )
}

export default GuessGroup;