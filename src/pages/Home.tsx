import classes from "./Home.module.css"

function Home() {
  return (
    <section className={classes.home}>
      <h2>Enter "Your name"</h2>
      <p>... or just start the quiz</p>
      <input type="text" placeholder="Your name" />
      <button>Start quiz</button>
    </section>
  )
}

export default Home
