import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import MainPage from "./views/MainPage/MainPage";
import MyPage from "./views/MyPage/MyPage";
import NavBar from "./views/NavBar/NavBar";
import F4 from "./views/Place/Engineering/4F/F4";
import EngineeringPage from "./views/Place/Engineering/EngineeringPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/landing" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/Register" component={RegisterPage} />
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/place/engineering" component={EngineeringPage} />
          <Route exact path="/place/engineering/4F" component={F4} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
