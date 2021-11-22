import React, { useState } from "react";
import "./ControlButtons.css";

export default function ControlButtons(props) {
  const [keyDown, setKeyDown] = useState(false);
  const keyDownHandler = (e) => {
    if (e.key === "a") {
      setKeyDown(true);
      console.log("a key is down");
    }
  };

  const ActiveButtons = (
    <div className="btn-grp">
      <div className="btn btn-two" onClick={props.handleReset}>
        Reset
      </div>
      <div className="btn btn-one" onClick={props.handlePauseResume}>
        {props.isPaused ? "Resume" : "Pause"}
      </div>
    </div>
  );

  return (
    // <div className="Control-Buttons">
    //   <div>{props.active ? ActiveButtons : StartButton}</div>
    // </div>

    <input onKeyDown={keyDownHandler}>
      {console.log(`Key pressed is ${keyDown}`)}
    </input>
  );
}
