import { useState, useEffect } from "react";
import "./Timer.css";

const Timer = ({ gameState }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  useEffect(() => {
    if (gameState) {
      setIsActive(true);
      // Reset seconds to zero on new game
      setSeconds(0);
    } else {
      setIsActive(false);
    }
  }, [gameState]);

  return (
    <div className="timer">
      <div className="time">
        {seconds >= 60
          ? `${Math.floor(seconds / 60)}:${
              seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60
            }`
          : seconds}
      </div>
    </div>
  );
};

export default Timer;
