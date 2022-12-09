import React, { useEffect, useState } from "react";
import classes from "./QuestionCard.module.css";

interface QuizCardProps {
  playerName: string | undefined;
}
interface QuizData {
  category: string;
  id: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  question: string;
  tags: string[];
  type: string;
  difficulty: string;
  regions: [];
  isNiche: boolean;
}

const QuizCard: React.FC<QuizCardProps> = (props) => {
  const [quizData, setQuizData] = useState<QuizData[]>([]);
  const [quizCategories, setQuizCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://the-trivia-api.com/api/questions")
      // fetch(
      //   "https://the-trivia-api.com/api/questions?categories=history&limit=1&region=SE&difficulty=easy"
      // )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        // const todoAddHandler = (text: string) => {
        //   setTodos((prevTodos) => [
        //     ...prevTodos,
        //     { id: Math.random().toString(), text: text }
        //   ])
        // }
        if (quizCategories.length < 10) {
          Object.values(result).map((obj) => {
            setQuizCategories((prevCategories) => [
              ...prevCategories,
              obj.category,
            ]);
          });
        }
        setQuizData(result);

        console.log("quizCategories", quizCategories);
      });
  }, []);

  return (
    <section className={classes["question-card"]}>
      <h1>Welcome {props.playerName}</h1>
      <p>Choose a category: </p>
      <ul>
        {quizCategories.map((category) => {
          <li value={category}>{category}</li>;
        })}
      </ul>
      <select name="" id="">
        <option value="">Geo</option>
        <option value="">His</option>
        <option value="">Math</option>
      </select>
      <p>Choose a region: </p>
      <select name="" id="">
        <option value="">Eng</option>
        <option value="">Swe</option>
      </select>
      <p>Choose difficulty: </p>
      <select name="" id="">
        <option value="">Easy</option>
        <option value="">Medium</option>
        <option value="">Hard</option>
        <option value="">Random</option>
      </select>
    </section>
  );
};

export default QuizCard;
