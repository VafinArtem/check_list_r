import {createReducer} from "@reduxjs/toolkit";
import {ActionType} from "../actions";

const initialState = {
  authorizationStatus: false,
  userName: undefined,
  signIn: undefined
};

const auth = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.SIGN_IN, (state, {payload}) => {
    state.signIn = payload;
  });

  builder.addCase(ActionType.AUTHORIZATION, (state, {payload}) => {
    state.authorizationStatus = payload;
  });
});

export {auth};
