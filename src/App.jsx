import { useState, useEffect } from 'react'
import words from "./wordList.json"
import HangmanDrawing from './components/HangmanDrawing.jsx'
import {HangmanWord} from './components/HangmanWord.jsx'
import {Keyboard} from './components/Keyboard.jsx'

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    // Creates random number to select a random word from the words array
    return words[Math.floor(Math.random() * words.length)]
  }); 

  const [guessedLetters, setGuessedLetters] = useState([]);

  const inCorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))
  // console.log(inCorrectLetters)

  function addGuessedLetter(letter){
    if(guessedLetters.includes(letter)) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }


  useEffect(() => {
    const handler = (e) => {
      const key = e.key;
      console.log(e);
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault();
      addGuessedLetter(key);
    }

    document.addEventListener("keydown", handler)

    return () => {
      document.removeEventListener("keydown", handler)
    }
  }, [])
  

  return (
    <div style={{maxWidth: "800px", display: "flex", flexDirection: "column", gap: "2rem", margin: "0 auto", alignItems: "center",}}>
      <div style={{fontSize: "2rem", textAlign: "center"}}>
        <p>Lose Win</p>
      </div>
      <HangmanDrawing numberOfGuesses={inCorrectLetters.length}/>
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
      <div style={{alignSelf: "stretch"}}>
        <Keyboard />
      </div>
    </div>
  )
}

export default App
