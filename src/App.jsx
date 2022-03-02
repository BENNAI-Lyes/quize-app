import { Questions } from "./components/Questions";
import "./app.css";
import { useState } from "react";

function App() {
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];

  const dataMony = [
    { id: 1, amount: "$ 100" },
    { id: 2, amount: "$ 200" },
    { id: 3, amount: "$ 300" },
    { id: 4, amount: "$ 500" },
    { id: 5, amount: "$ 1.000" },
    { id: 6, amount: "$ 2.000" },
    { id: 7, amount: "$ 4.000" },
    { id: 8, amount: "$ 8.000" },
    { id: 9, amount: "$ 16.000" },
    { id: 10, amount: "$ 32.000" },
    { id: 11, amount: "$ 64.000" },
    { id: 12, amount: "$ 125.000" },
    { id: 13, amount: "$ 250.000" },
    { id: 14, amount: "$ 500.000" },
    { id: 15, amount: "$ 1.000.000" },
  ].reverse();

  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [earnedMony, setEarnedMony] = useState("$ 0");
  const [stopGame, setStopGame] = useState(false);

  return (
    <div className="app">
      <div className="left">
        {!stopGame ? (
          <Questions
            data={data}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
            setStopGame={setStopGame}
            stopGame={stopGame}
          />
        ) : (
          <div className="stopGame">stop</div>
        )}
      </div>

      <div className="right">
        <ul className="list">
          {dataMony.map((d) => (
            <li
              className={
                questionNumber + 1 === d.id ? "itemList active" : "itemList"
              }
              key={d.id}
            >
              <span className="number">{d.id}</span>
              <span className="amount"> {d.amount} </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
