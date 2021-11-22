import React from "react";
import "./ControlButtons.css";
import useEventListener from "@use-it/event-listener";

export default function ControlButtons(props) {
  const SPACEBAR = ["32", " "];
  function handler({ key }) {
    if (SPACEBAR.includes(String(key))) {
      console.log("Spacebar key pressed!");
      props.handleStart();
    }
  }
  useEventListener("keydown", handler);
  const StartButton = (
    <div className="btn btn-one btn-start" onClick={props.handleStart}>
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
