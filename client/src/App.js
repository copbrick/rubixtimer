import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./components/Buttons/LoginButton";
import LogoutButton from "./components/Buttons/LogoutButton";
import SettingsModal from "./components/SettingsModal";
import ProfileModal from "./components/ProfileModal";
import Data from "./components/Data";
// import { useLocalStorage } from "./components/Hooks/useLocalStorage";
import { useDBStorage } from "./components/Hooks/useDBStorage";
import Scrambler from "./components/Scrambler";
import StopwatchTimer from "./components/Timer/Stopwatch";
import DisplayTimes from "./components/DisplayTimes";
import { Button } from "@mui/material";

function App() {
  // const [color, setColor] = useLocalStorage("color", "");
  const [color, setColor] = useDBStorage("backgroundColor", "");
  const [scramble, setScramble] = useState("");

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: color }}>
        <img src={logo} className="App-logo" alt="logo" />
        <SettingsModal color={color} setColor={setColor} />
        <ProfileModal />
        <LoginButton />
        <LogoutButton />
        <Scrambler scramble={scramble} setScramble={setScramble} />
        <StopwatchTimer />
        <Data />
        <DisplayTimes />
      </header>
    </div>
  );
}

export default App;
