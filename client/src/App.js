import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginBtn from "./components/LoginBtn";
import LogoutBtn from "./components/LogoutBtn";
import Data from "./components/Data";
import SettingsModal from "./components/SettingsModal";
import { useLocalStorage } from "./components/useLocalStorage";
import { useDBStorage } from "./components/useDBStorage";
import ProfileModal from "./components/ProfileModal";
import Scrambler from "./components/Scrambler";

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
        <LoginBtn />
        <LogoutBtn />
        <Data />
        <Scrambler scramble={scramble} setScramble={setScramble} />
      </header>
    </div>
  );
}

export default App;
