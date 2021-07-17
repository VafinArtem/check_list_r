import React from "react";
import {Switch, Route} from 'react-router-dom';
import {Url} from "../../consts";
import Login from "../login/login";
import Main from '../main/main';
import NotFoundPage from "../not-found-page/not-found-page";

const App = () => {
  return (
    <Switch>
      <Route exact path={Url.MAIN}>
        <Main />
      </Route>
      <Route exact path={Url.LOG_IN} render={() => <Login />}>
      </Route>
      <Route exact path={Url.NOT_FOUND}>
        <NotFoundPage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default App;
