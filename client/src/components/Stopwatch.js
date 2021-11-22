import React, { useState, useEffect } from "react";
import "./Stopwatch.css";
import Timer from "./Timer";
import ControlButtons from "./ControlButtons";

function Stopwatch() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleTimer = () => {
    setIsActive(!isActive);
    setIsPaused(!isPaused);

    if(isActive == false) {
      setTime(0);
    }
  };

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };


  const handleStop = () => {
    setIsActive(false);
    setIsPaused(true);
    setTime(0);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsPaused(false);
    setTime(0);
  };

  return (
    <div className="stop-watch">
      <Timer time={time} />
      <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleTimer={handleTimer}
        handleStart={handleStart}
        handleStop={handleStop}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      />
    </div>
  );
}

export default Stopwatch;
