import React from "react";
import MaterialButton from "./MaterialButton";

export default function ScrambleButton(props) {
  return (
    <div>
      <MaterialButton onClick={props.onClick} text="Scramble!"></MaterialButton>
    </div>
  );
}
