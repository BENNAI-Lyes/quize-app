import { useEffect, useState } from "react";
import Timer from "./Timer";
import useSound from "use-sound";
import correct from "../sounds/correct.mp3";
import play from "../sounds/play.wav";
import wrong from "../sounds/wrong.mp3";

export function Questions({
  data,
  dataMony,
  questionNumber,
  setQuestionNumber,
  selectedAnswer,
  setSelectedAnswer,
  setStopGame,
  stopGame,
}) {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [styleClass, setStyleClass] = useState("answer");
  const [moneyEarned, setMoneyEarned] = useState("0 $");
  const [clicked, setClicked] = useState(false);

  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    setCurrentQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  useEffect(() => {
    questionNumber > 1 &&
      setMoneyEarned(dataMony.find((d) => d.id === questionNumber - 1).amount);
  }, [questionNumber, dataMony]);

  const delay = (deration, callback) => {
    setTimeout(() => {
      callback();
    }, deration);
  };

  const handelAnswerClick = (answer) => {
    setClicked(true);
    setSelectedAnswer(answer);
    setStyleClass("answer active");
    delay(2000, () => {
      answer.correct
        ? setStyleClass("answer correct")
        : setStyleClass("answer wrong");
    });
    delay(4000, () => {
      answer.correct ? correctAnswer() : wrongAnswer();
    });

    delay(10000, () => {
      if (answer.correct) {
        setClicked(false);
        setSelectedAnswer(null);
        setQuestionNumber((prev) => prev + 1);
      } else {
        setStopGame(true);
      }
    });
  };

  return !stopGame ? (
    <>
      <div className="leftTop">
        <div className="timer">
          <Timer
            setStopGame={setStopGame}
            questionNumber={questionNumber}
            clicked={clicked}
          />
        </div>
      </div>
      <div className="leftBottom">
        <div className="question"> {currentQuestion?.question} </div>
        <div className="answers">
          {currentQuestion?.answers.map((answer, index) => (
            <div
              className={
                answer.text === selectedAnswer?.text ? styleClass : "answer"
              }
              key={index}
              onClick={() => handelAnswerClick(answer)}
            >
              {answer.text}
            </div>
          ))}
        </div>
      </div>
    </>
  ) : (
    <div className="stopGame">{`You are earned, ${moneyEarned} `}</div>
  );
}
