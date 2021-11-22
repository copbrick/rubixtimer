import React from "react";
import "./ControlButtons.css";

export default function ControlButtons(props) {
  function handleKeyDown(event) {
    console.log();
    if (event.key === "Spacebar") {
			alert('The sky is your starting point!')
      // props.handleStart();
    }
  }
  const StartButton = (
    <div className="btn btn-one btn-start" onKeyDown={handleKeyDown}>
      Start
    </div>
  );

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
    <div className="Control-Buttons">
      <div>{props.active ? ActiveButtons : StartButton}</div>
    </div>
  );
}
