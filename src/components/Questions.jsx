import { useEffect, useState } from "react";

export function Questions({
  data,
  questionNumber,
  setQuestionNumber,
  selectedAnswer,
  setSelectedAnswer,
  setStopGame,
}) {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [styleClass, setStyleClass] = useState("answer");

  useEffect(() => {
    setCurrentQuestion(data[questionNumber]);
  }, [data, questionNumber]);

  const delay = (deration, callback) => {
    setTimeout(() => {
      callback();
    }, deration);
  };

  const handelAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setStyleClass("answer active");
    delay(3000, () => {
      if (answer.correct) {
        setStyleClass("answer correct");
      } else {
        setStyleClass("answer wrong");
      }
    });
    delay(6000, () => {
      if (answer.correct) {
        setQuestionNumber((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        setStopGame(true);
      }
    });
  };

  return (
    <>
      <div className="leftTop">
        <div className="timer">30</div>
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
  );
}
