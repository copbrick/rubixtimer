import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./Stopwatch.css";
import DisplayTimer from "./DisplayTimer";
import ControlTimer from "./ControlTimer";

function StopwatchTimer(props) {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);
  const [times, setTimes] = useState([]);

  useEffect(() => {
    let interval = null;
    if (isActive === true) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else if (isActive === false && time !== 0) {
      const newTimes = [...times, time];
      setTimes(newTimes);
      props.setTimes(newTimes); 
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, time]);

  const handleTimer = async () => {
    setTime(0);
    setIsActive(true);
    if (isActive) {
      setIsActive(false);
      setTime(time);
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
