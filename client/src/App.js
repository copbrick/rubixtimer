import logo from "./logo.svg";
import "./App.css";
// import Button from '@mui/material/Button';
import LoginBtn from './components/LoginBtn';
import LogoutBtn from './components/LogoutBtn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginBtn />
        <LogoutBtn />
      </header>
    </div>
  );
}

export default App;
