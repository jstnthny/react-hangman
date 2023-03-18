import { useState } from 'react'
import words from "./wordList.json"
import HangmanDrawing from './components/HangmanDrawing.jsx'
import {HangmanWord} from './components/HangmanWord.jsx'
import {Keyboard} from './components/Keyboard.jsx'

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    // Creates random number to select a random word from the words array
    return words[Math.floor(Math.random() * words.length)]
  }); 

  const [guessedLetter, setGuessedLetters] = useState([]);

  return (
    <div style={{maxWidth: "800px", display: "flex", flexDirection: "column", gap: "2rem", margin: "0 auto", alignItems: "center",}}>
      <div style={{fontSize: "2rem", textAlign: "center"}}>
        <p>Lose Win</p>
      </div>
      <HangmanDrawing />
      <HangmanWord />
      <div style={{alignSelf: "stretch"}}>
        <Keyboard />
      </div>
    </div>
  )
}

export default App
