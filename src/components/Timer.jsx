import { useEffect, useState } from "react";

export default function Timer({ setStopGame, questionNumber, clicked }) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (clicked) return;
    if (timer === 0) return setStopGame(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timer, setStopGame, clicked]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);

  return timer;
}
