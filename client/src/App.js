import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./components/Buttons/LoginButton";
import LogoutButton from "./components/Buttons/LogoutButton";
import Data from "./components/Data";
import SettingsModal from "./components/SettingsModal";
import ProfileModal from "./components/ProfileModal";
// import { useLocalStorage } from "./components/Hooks/useLocalStorage";
import { useDBStorage } from "./components/Hooks/useDBStorage";
import Scrambler from "./components/Scrambler";
import StopwatchTimer from "./components/Timer/Stopwatch";
import { Button } from "@mui/material";

function App() {
  // const [color, setColor] = useLocalStorage("color", "");
  const [color, setColor] = useDBStorage("backgroundColor", "");
  const [scramble, setScramble] = useState("");

  const [counter, setCounter] = useDBStorage("counter", 0);
  const incrementCounter = () => setCounter(counter + 1);

  return (
    <div className="App">
      {/* <header className="App-header" style={{ backgroundColor: color }}> */}
      {/* <header className="App-header" style = {{backgroundColor : color === null ? 'black' : color}}> */}
      {/* {console.log("color type is: " + typeof color)}
      {console.table(color)} */}
      <header className="App-header" style={{ backgroundColor: color }}>
        <img src={logo} className="App-logo" alt="logo" />
        <SettingsModal color={color} setColor={setColor} />
        <ProfileModal />
        <LoginButton />
        <LogoutButton />
        <Data />
        <Scrambler scramble={scramble} setScramble={setScramble} />
        <StopwatchTimer />
        <button onClick={incrementCounter}>-</button>
        <h5>Count is {counter}</h5>
      </header>
    </div>
  );
}

export default App;
