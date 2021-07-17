import React from "react";
import {Route, Switch} from "react-router-dom";
import {Url} from "../../consts";
import Login from "../login/login";
import Main from '../main/main';

const App = () => {
  return (
    <Switch>
      <Route exact path={Url.MAIN}>
        <Main />
      </Route>
      <Route exact path={Url.LOG_IN}>
        <Login />
      </Route>
    </Switch>
  );
};

export default App;
