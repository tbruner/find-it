import { useState, useEffect } from "react";

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
      <div className="timer">{seconds}</div>
    </>
  );
};

export default Timer;
