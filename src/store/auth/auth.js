import {createReducer} from "@reduxjs/toolkit";
import {ActionType} from "../actions";

const initialState = {
  authorizationStatus: false,
  userName: ``,
  showAuthorizationMessage: false,
  authorizationMessage: ``,
};

const auth = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.SIGN_IN, (state, {payload}) => {
    state.signIn = payload;
  });

  builder.addCase(ActionType.AUTHORIZATION, (state, {payload}) => {
    state.authorizationStatus = payload.action;
    state.userName = payload.email;
  });
  builder.addCase(ActionType.AUTHORIZATION_FAIL, (state, {payload}) => {
    state.showAuthorizationMessage = true;
    state.authorizationMessage = payload;
  });
  builder.addCase(ActionType.RESET_MESSAGE, (state) => {
    state.showAuthorizationMessage = false;
  });
});

export {auth};
