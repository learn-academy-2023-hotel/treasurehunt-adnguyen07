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
  } else if (clickedSquareIndex === bombLocation) {
    updatedBoard[clickedSquareIndex] = "💣"
  } else {
    updatedBoard[clickedSquareIndex] = "🌲"
  }
  setBoard(updatedBoard)
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
    </>
  )
}

export default App
