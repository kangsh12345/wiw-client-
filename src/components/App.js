import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import NavBar from "./views/NavBar/NavBar";
import RegisterPage from "./views/RegisterPage/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/Register" component={RegisterPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
