import './App.css';

import Header from './header/header.jsx';
import GuessGroup from './guess-group/guess-group.jsx';
import Keyboard from './keyboard/keyboard.jsx';
import { useState } from 'react';

const LETTER_COUNT = 5;
const GUESS_COUNT = 6;

function App() {
  const [submittedGuesses, setSubmittedGuesses] = useState(["", "", "", "", "", ""]); //TODO: make this dynamic
  const [guess, setGuess] = useState("");
  const [guessCount, setGuessCount] = useState(0);

  function addLetterToGuess(char: string) {
    if (guess.length <= LETTER_COUNT) {
      setGuess(guess.concat(char));
    }
  }

  function deleteLetterFromGuess() {
    if (guess.length > 0) {
      setGuess(guess.slice(0, -1));
    }
  }

  function updateGuessesList(guess: string, index: number) {
    const updatedGuesses = submittedGuesses.map((g, i) => {
      if (i === index) {
        // Update the current guess
        return guess;
      } else {
        // The rest haven't changed
        return g;
      }
    });
    setSubmittedGuesses(updatedGuesses)
  }

  function submitGuess() {
    // TODO: Cant submit unless you have the correct count
    setGuess("");
    setGuessCount(guessCount + 1);
    updateGuessesList(guess, guessCount);

    // TODO: check if name matches
    // TODO: color the letter tiles
    // TODO: color the input tiles
  }

  return (
    <>
      <Header></Header>
      <div className="body">
        <main className="main">
          {Array.from({length: GUESS_COUNT}).map((_, index) => {
              return <GuessGroup
                        key={`guess-row${index}`}
                        guess={guessCount == index ? guess : submittedGuesses[index]}
                        column={index}
                        letterCount={LETTER_COUNT}>
                      </GuessGroup>
          })}
        </main>
        <aside className="aside">
          <Keyboard 
            addLetterToGuess={addLetterToGuess} 
            deleteLetterFromGuess={deleteLetterFromGuess}
            submitGuess={submitGuess}
            >
          </Keyboard>
        </aside>
      </div>
    </>
  )
}

export default App
