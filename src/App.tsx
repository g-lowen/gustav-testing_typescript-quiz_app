import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"

import "./App.css"
import Home from "./pages/Home"
import QuestionCard from "./pages/QuestionCard"

const App: React.FC = () => {
  const [playerName, setPlayerName] = useState<string>()

  const nameHandler = (text: string) => {
    console.log(text)

    setPlayerName(text)
  }
  return (
    <section className="app">
      <Routes>
        <Route path="/" element={<Home addPlayerName={nameHandler} />}></Route>
        <Route
          path="/quiz"
          element={<QuestionCard playerName={playerName} />}
        ></Route>
      </Routes>
    </section>
  )
}

export default App
