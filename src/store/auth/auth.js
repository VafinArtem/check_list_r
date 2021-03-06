import {createReducer} from "@reduxjs/toolkit";
import {AuthorizationStatus, AuthTab} from "../../consts";
import {ActionType} from "../actions";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userName: ``,
  showErrorAuthorizationMessage: false,
  showSuccesAuthorizationMessage: false,
  authorizationMessage: ``,
  activeTab: AuthTab.LOGIN,
};

const auth = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.SIGN_IN, (state, {payload}) => {
    state.showSuccesAuthorizationMessage = true;
    state.authorizationMessage = payload;
  });
  builder.addCase(ActionType.AUTHORIZATION, (state, {payload}) => {
    state.authorizationStatus = payload.action;
    state.userName = payload.email;
  });
  builder.addCase(ActionType.AUTHORIZATION_FAIL, (state, {payload}) => {
    state.showErrorAuthorizationMessage = true;
    state.authorizationMessage = payload;
  });
  builder.addCase(ActionType.AUTHORIZATION_SUCCES, (state, {payload}) => {
    state.showSuccesAuthorizationMessage = true;
    state.authorizationMessage = payload;
  });
  builder.addCase(ActionType.RESET_MESSAGE, (state) => {
    state.showErrorAuthorizationMessage = false;
    state.showSuccesAuthorizationMessage = false;
  });
  builder.addCase(ActionType.CHANGE_AUTH_TAB, (state, {payload}) => {
    state.activeTab = payload;
  });
});

export {auth};
