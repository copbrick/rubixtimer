import logo from "./logo.svg";
import "./App.css";
import LoginBtn from "./components/LoginBtn";
import LogoutBtn from "./components/LogoutBtn";
import ProfileButton from "./components/ProfileButton";
import Data from "./components/Data";
import SettingsModal from "./components/SettingsModal";
import { useLocalStorage } from "./components/useLocalStorage";
import { useDBStorage } from "./components/useDBStorage";
import ProfileModal from "./components/ProfileModal";

function App() {
  // const [color, setColor] = useLocalStorage("color", "");
  const [color, setColor] = useDBStorage("color", "");
  return (
    <div className="App">
      {/* <header className="App-header" style={{ backgroundColor: color }}> */}
        {/* <header className="App-header" style = {{backgroundColor : color === null ? 'black' : color}}> */}
        <header className="App-header" style = {{backgroundColor : color}}>
        <img src={logo} className="App-logo" alt="logo" />
        <SettingsModal color={color} setColor={setColor} />
        <ProfileModal color={color} setColor={setColor} />
        <LoginBtn />
        <LogoutBtn />
        <Data />
      </header>
    </div>
  );
}

export default App;
