import logo from "./logo.svg";
import "./App.css";
// import Button from '@mui/material/Button';
import LoginBtn from "./components/LoginBtn";
import LogoutBtn from "./components/LogoutBtn";
import Data from "./components/Data";
import SettingsModal from "./components/SettingsModal";

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: JSON.parse(localStorage.getItem("color"))}}>
        <img src={logo} className="App-logo" alt="logo" />
        <SettingsModal />
        <LoginBtn />
        <LogoutBtn />
        <Data />
      </header>
    </div>
  );
}

export default App;
