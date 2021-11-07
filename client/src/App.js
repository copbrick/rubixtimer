import logo from "./logo.svg";
import "./App.css";
// import Button from '@mui/material/Button';
import LoginBtn from "./components/LoginBtn";
import LogoutBtn from "./components/LogoutBtn";

import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginBtn />
        <LogoutBtn />

        <BrowserRouter>
          <Switch>
            <Route path="/logoutpage">
              <LogoutBtn />
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
