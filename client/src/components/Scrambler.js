import scrambleGenerator from "rubiks-cube-scramble";
import React, { useEffect } from "react";

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
      <button onClick={handleScramble}>Scramble!</button>
      <br />
      <strong>{props.scramble}</strong>
    </div>
  );
}
