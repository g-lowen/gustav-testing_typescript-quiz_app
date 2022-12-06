import "./App.css"
import { useState } from "react"
import Home from "./pages/Home"

function App() {
  const [test, setTest] = useState(true)

  function clickHandler(e: React.FormEvent<HTMLInputElement>) {
    console.log(typeof e.currentTarget.value)

    setTest(e.currentTarget.value)
  }
  return (
    <section>
      {test ? (
        <section className="app">
          <section className="first-container">
            <h1>
              Quiz <span className="loader"></span> Time
            </h1>
          </section>
          <section className="second-container">
            <Home />
            <button onClick={clickHandler} value={false}>
              Click
            </button>
          </section>
        </section>
      ) : (
        <section className="app">
          <section className="first"></section>
          <section className="second">
            <button onClick={clickHandler} value={true}>
              Click
            </button>
          </section>
        </section>
      )}
    </section>
  )
}

export default App
