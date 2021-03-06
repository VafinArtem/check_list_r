import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import {Router as BrowserRouter} from 'react-router-dom';
import {createAPI} from "./services/api";
// import reportWebVitals from "./reportWebVitals";
import mainReducer from "./store/main-reducer";
import App from "./components/app/app";
import {redirect} from "./store/middlewares/redirect";
import browserHistory from "./browser-history";
import {checkLogin} from "./store/api-actions";
import {authorization} from "./store/actions";
import {AuthorizationStatus} from "./consts";

const api = createAPI(
    () => store.dispatch(authorization(AuthorizationStatus.NO_AUTH))
);

const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkLogin()).then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter history={browserHistory}>
          <App />
        </BrowserRouter>
      </Provider>,
      document.querySelector(`#root`)
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
