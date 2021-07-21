import React from "react";
import {Switch, Route} from 'react-router-dom';
import {Url} from "../../consts";
import Auth from "../auth/auth";
import Footer from "../footer/footer";
import Header from "../header/header";
import Main from '../main/main';
import NotFoundPage from "../not-found-page/not-found-page";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path={Url.MAIN}>
          <Main />
        </Route>
        <Route exact path={Url.LOG_IN} render={() => <Auth />}>
        </Route>
        <Route exact path={Url.NOT_FOUND}>
          <NotFoundPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default App;
