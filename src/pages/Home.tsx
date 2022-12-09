import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import UserNameButton from "../components/buttons/userNameButton";

import classes from "./Home.module.css";

interface HomeProps {
  addPlayerName: (playerName: string) => void;
}

const Home: React.FC<HomeProps> = (props) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const nameSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredName = nameInputRef.current!.value;
    props.addPlayerName(enteredName);
    navigate("/quiz");
  };

  return (
    <section className={classes.home}>
      <section className={classes["first-container"]}>
        <h1 className="h1">
          Quiz <span className={classes.loader}></span> Time
        </h1>
      </section>
      <section className={classes["second-container"]}>
        <UserNameButton addPlayerName={props.addPlayerName} />
        {/* <form onSubmit={nameSubmitHandler}>
          <h1>
            <label htmlFor="player-name">Enter your name or not</label>
          </h1>
          <input
            type="text"
            id="player-name"
            placeholder="Your name"
            ref={nameInputRef}
          />
          <button type="submit">Start Quiz</button>
        </form> */}
      </section>
    </section>
  );
};

export default Home;
