import './guess-group.css';
import LetterBox from './letter-box/letter-box';

function GuessGroup() {
    return (
        <div class="guess-group">
            <LetterBox></LetterBox>
            <LetterBox></LetterBox>
            <LetterBox></LetterBox>
            <LetterBox></LetterBox>
            <LetterBox></LetterBox>
        </div>
    )
}

export default GuessGroup;