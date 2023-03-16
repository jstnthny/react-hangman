import { useState } from 'react'
import words from "./wordList.json"

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    // Creates random number to select a random word from the words array
    return words[Math.floor(Math.random() * words.length)]
  }); 

  const [guessedLetter, setGuessedLetters] = useState([]);

  return (
    <div className="App">
      <div>
        <p>Lose Win</p>
      </div>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </div>
  )
}

export default App
