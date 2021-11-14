import logo from "./logo.svg";
import "./App.css";
import LoginBtn from "./components/LoginBtn";
import LogoutBtn from "./components/LogoutBtn";
import Data from "./components/Data";
import SettingsModal from "./components/SettingsModal";
import { useLocalStorage } from "./components/useLocalStorage";
import {useDBStorage} from "./components/useDBStorage";

function App() {
  // const [color, setColor] = useLocalStorage("color", "");
  const {color, setColor} = useDBStorage("settings", "");
  return (
    <div className="App">
      <header className="App-header" style = {{backgroundColor : color === undefined ? 'black' : color}}>
      {/* <header className="App-header" style = {{backgroundColor : color}}> */}
        <img src={logo} className="App-logo" alt="logo"/>
        <SettingsModal color={color} setColor={setColor} />
        <LoginBtn />
        <LogoutBtn />
        <Data />
      </header>
    </div>
  );
}

export default App;
