import { useState, useEffect } from "react";
import "./Timer.css";

const Timer = ({ gameState }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (gameState) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, gameState]);

  return (
    <>
      <div className="label">Time:</div>
      <div className="timer">
        {seconds >= 60
          ? `${Math.floor(seconds / 60)}:${
              seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60
            }`
          : seconds}
      </div>
    </>
  );
};

export default Timer;
