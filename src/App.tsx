import './App.css';

import Header from './header/header.jsx';
import GuessGroup from './guess-group/guess-group.jsx';
import Keyboard from './keyboard/keyboard.jsx';
import { useState } from 'react';

const LETTER_COUNT = 5;

function App() {
  const [guess, setGuess] = useState("");

  function addLetterToGuess(char: string) {
    if (guess.length <= LETTER_COUNT) {
      setGuess(guess.concat(char));
    }
  }

  function deleteLetterFromGuess(char: string) {
    if (guess.length > 0) {
      setGuess(guess.slice(0, -1));
    }
  }

  return (
    <>
      <Header></Header>
      <div className="body">
        <main className="main">
          <GuessGroup guess={guess} guessCount={1} letterCount={LETTER_COUNT}></GuessGroup>
          <GuessGroup guess={""} guessCount={2} letterCount={LETTER_COUNT}></GuessGroup>
          <GuessGroup guess={""} guessCount={3} letterCount={LETTER_COUNT}></GuessGroup>
          <GuessGroup guess={""} guessCount={4} letterCount={LETTER_COUNT}></GuessGroup>
          <GuessGroup guess={""} guessCount={5} letterCount={LETTER_COUNT}></GuessGroup>
          <GuessGroup guess={""} guessCount={6} letterCount={LETTER_COUNT}></GuessGroup>
        </main>
        <aside className="aside">
          <Keyboard addLetterToGuess={addLetterToGuess} deleteLetterFromGuess={deleteLetterFromGuess}></Keyboard>
        </aside>
      </div>
    </>
  )
}

export default App
