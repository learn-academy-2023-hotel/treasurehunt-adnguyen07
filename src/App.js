import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

const [treasureLocation, useTreasureLocation] = useState(
  Math.floor(Math.random() * board.length)
)

const [bombLocation, useBombLocation] = useState(
  Math.floor(Math.random() * board.length)
)

const handleSquareClick = (clickedSquareIndex) => {
  let updatedBoard = [...board]
  if (clickedSquareIndex === treasureLocation) {
    updatedBoard[clickedSquareIndex] = "💎"
    alert ("Congratulations! You found the treasure!")
  } else if (clickedSquareIndex === bombLocation) {
    updatedBoard[clickedSquareIndex] = "💣"
    alert ("Oh no! You found a bomb and well...you're dead.")
  } else {
    updatedBoard[clickedSquareIndex] = "🌲"
    setGuess(guess - 1)
  }
  setBoard(updatedBoard)
}

const reset = () => {
  window.location.reload()
}

const [guess, setGuess] = useState(5)
if (guess === 0) {
  alert ("Whoops. You ran out of guesses...and lost.")
}

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div class="board">
      {board.map((value, index) => {
        console.log(value, index)
        return <Square value={value} index={index} handleSquareClick={handleSquareClick}/>
})}
      </div>
      <p className="guess-box">Guesses Remaining: {guess}</p>
      <div className="reset">
      <button onClick={reset}>Play Again</button>
      </div>
    </>
  )
}

export default App
