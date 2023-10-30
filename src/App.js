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

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div class="board">
      {board.map((value, index) => {
        console.log(value, index)
        return <Square value={value}/>
      })}
      </div>
    </>
  )
}

export default App
