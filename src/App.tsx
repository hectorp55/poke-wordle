import './App.css';

import Header from './header/header.jsx';
import GuessGroup from './guess-group/guess-group.jsx';
import Keyboard from './keyboard/keyboard.jsx';
import Modal from 'react-modal';
import { useState } from 'react';
import { getPokemonNames } from './hooks/fetchPokemonNames.jsx';
import { getLetterColorWithIndex } from './hooks/letterChecks.jsx'; 
import ModalSelector from './modal-selector/modal-selector.jsx';

const LETTER_COUNT = 5;
const GUESS_COUNT = 6;

const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function App() {
  const { data, isLoading, isError, error, refetch } = getPokemonNames();
  
  const [submittedGuesses, setSubmittedGuesses] = useState(["", "", "", "", "", ""]); //TODO: make this dynamic
  const [guess, setGuess] = useState("");
  const [guessCount, setGuessCount] = useState(0);
  const [yellowLetters, setYellowLetters] = useState<string[]>([]);
  const [greenLetters, setGreenLetters] = useState<string[]>([]);
  const [greyLetters, setGreyLetters] = useState<string[]>([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalSelector, setModalSelector] = useState("");

  if (isLoading) return <div><img src="public/poke-loading.gif"></img></div>; // TODO: make this pretty
  if (isError) return <div>{error.toString()}</div>; // TODO: make this pretty

  console.log(data);

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
    if (guess in data.pokemon) {
      console.log("Valid Guess")
      // TODO: alert that guess is not a pokemon
      if (guess.length == LETTER_COUNT) {
        gatherColorLetter(guess, data.randomPokemon);
        if (guess == data.randomPokemon) {
          setModalSelector("WinModal");
          openModal();
        }
        
        setGuess("");
        setGuessCount(guessCount + 1);
        updateGuessesList(guess, guessCount);
      }
    }    
  }

  function gatherColorLetter(guess: string, answer: string) {
    for (let i = 0; i < guess.length; i++) {
      const letter = guess[i];
      const letterColor = getLetterColorWithIndex(guess, answer, i);
      switch (letterColor) {
          case "green":
            setGreenLetters(greenLetters => [...greenLetters, letter]);
            break;
          case "yellow":
            setYellowLetters(yellowLetters => [...yellowLetters, letter]);
            break;
          default:
            setGreyLetters(greyLetters => [...greyLetters, letter])
      }
    }
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openHelp() {
    setModalSelector("HelpModal");
    openModal();
  }

  function openSettings() {
    setModalSelector("SettingsModal");
    openModal();
  }

  function resetGame() {
    setSubmittedGuesses(["", "", "", "", "", ""]); //TODO: make this dynamic
    setGuess("");
    setGuessCount(0);
    setYellowLetters([]);
    setGreenLetters([]);
    setGreyLetters([]);
    refetch();
  }
  return (
    <>
      <Header openSettings={openSettings} openHelp={openHelp}></Header>
      <div className="body">
        <main className="main">
          {Array.from({length: GUESS_COUNT}).map((_, index) => {
              return <GuessGroup
                        key={`guess-row${index}`}
                        guess={guessCount == index ? guess : submittedGuesses[index]}
                        column={index}
                        letterCount={LETTER_COUNT}
                        isSubmitted={guessCount > index}
                        answer={data.randomPokemon}
                        >
                      </GuessGroup>
          })}
        </main>
        <aside className="aside">
          <Keyboard 
            addLetterToGuess={addLetterToGuess} 
            deleteLetterFromGuess={deleteLetterFromGuess}
            submitGuess={submitGuess}
            greenLetters={greenLetters}
            yellowLetters={yellowLetters}
            greyLetters={greyLetters}
            >
          </Keyboard>
        </aside>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customModalStyles}
        >
          <ModalSelector closeModal={closeModal} selector={modalSelector} resetGame={resetGame} pokemonName={data.randomPokemon}></ModalSelector>
        </Modal>
      </div>
    </>
  )
}

export default App
