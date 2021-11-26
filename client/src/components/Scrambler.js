import scrambleGenerator from "rubiks-cube-scramble";
import React, { useEffect } from "react";
import MaterialButton from "./Buttons/MaterialButton";

export default function Scrambler(props) {
  const handleScramble = () => {
    props.setScramble(scrambleGenerator());
  };

  //loads a random scramble on mount
  useEffect(() => {
    handleScramble();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <MaterialButton onClick = {handleScramble} text="Scramble!"></MaterialButton>
      <br />
      <strong>{props.scramble}</strong>
    </div>
  );
}
