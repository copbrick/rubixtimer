import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./Stopwatch.css";
import DisplayTimer from "./DisplayTimer";
import ControlTimer from "./ControlTimer";
import { getThemeProps } from "@mui/system";

function StopwatchTimer(props) {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isActive === true) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else if (isActive === false && time !== 0) {
      console.log(time);
      props.setTimes(time);
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
