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
    } 
    else if (time != 0 && isActive === false) {
      axios
        .post("/api/update/times", { time })
        .then(() => {
          console.log("time has been added to database");
        })
        .catch((err) => {
          console.log("error adding time to database" + err);
        });
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

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
