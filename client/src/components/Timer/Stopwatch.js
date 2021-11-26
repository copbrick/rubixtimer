import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./Stopwatch.css";
import DisplayTimer from "./DisplayTimer";
import ControlTimer from "./ControlTimer";

function StopwatchTimer() {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive === true) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const handleTimer = () => {
    setIsActive(true);
    if (isActive) {
      setTime(0);
      setIsActive(false);
    }
  };

  return (
    <div className="stop-watch">
      <DisplayTimer time={time} />
      <ControlTimer handleTimer={handleTimer} />
    </div>
  );
}

export default StopwatchTimer;
