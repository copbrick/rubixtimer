import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Data from "./components/Data";
import SettingsModal from "./components/SettingsModal";
import { useLocalStorage } from "./components/useLocalStorage";
import { useDBStorage } from "./components/useDBStorage";
import ProfileModal from "./components/ProfileModal";
import Scrambler from "./components/Scrambler";
import Stopwatch from "./components/Stopwatch";


function App() {
  // const [color, setColor] = useLocalStorage("color", "");
  const [color, setColor] = useDBStorage("color", "");
  const [scramble, setScramble] = useState("");
  return (
    <div className="App">
      {/* <header className="App-header" style={{ backgroundColor: color }}> */}
      {/* <header className="App-header" style = {{backgroundColor : color === null ? 'black' : color}}> */}
      <header className="App-header" style={{ backgroundColor: color }}>
        <img src={logo} className="App-logo" alt="logo" />
        <SettingsModal color={color} setColor={setColor} />
        <ProfileModal color={color} setColor={setColor} />
        <LoginButton />
        <LogoutButton />
        <Data />
        <Scrambler scramble={scramble} setScramble={setScramble} />
        <Stopwatch />
      </header>
    </div>
  );
}

export default App;
