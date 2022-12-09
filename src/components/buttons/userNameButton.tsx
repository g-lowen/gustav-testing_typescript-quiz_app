import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

interface HomeProps {
  addPlayerName: (playerName: string) => void;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
}

const UserNameButton: React.FC<HomeProps> = ({
  backgroundColor,
  size,
  ...props
}) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const nameSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredName = nameInputRef.current!.value;
    props.addPlayerName(enteredName);
    navigate("/quiz");
  };

  return (
    <form onSubmit={nameSubmitHandler}>
      <h1>
        <label htmlFor="player-name">Enter your name or not</label>
      </h1>
      <input
        type="text"
        id="player-name"
        placeholder="Your name"
        ref={nameInputRef}
      />
      <button type="submit" style={{ backgroundColor }}>
        Start Quiz
      </button>
    </form>
  );
};

export default UserNameButton;
