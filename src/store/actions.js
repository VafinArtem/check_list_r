import {createAction} from "@reduxjs/toolkit";

export const ActionType = {
  LOAD_CARDS: `cards/loadCards`,
  CHANGE_LOAD_CARDS_STATUS: `cards/changeLoadStatus`,
  CHANGE_LOAD_PROJECTS_STATUS: `projects/changeLoadStatus`,
  COMPLITE_CARD: `cards/compliteCards`,
  UPDATE_CARD: `cards/update`,
  ADD_CARD: `cards/add`,
  CHANGE_ADD_CARD: `cards/changeAddStatus`,
  DELETE_CARD: `cards/delete`,
  LOAD_PROJECTS: `projects/load`,
  ADD_PROJECT: `projects/add`,
  SET_PROJECT: `project/set`,
  REDIRECT_TO_ROUTE: `site/redirect`,
  RESET_MESSAGE: `auth/resetMessage`,
  SIGN_IN: `auth/signIn`,
  RESTORE: `auth/restore`,
  AUTHORIZATION: `auth/auth`,
  AUTHORIZATION_FAIL: `auth/authFail`,
  AUTHORIZATION_SUCCES: `auth/authSucces`,
  RESTORE_FAIL: `auth/restoreFail`,
  CHANGE_AUTH_TAB: `auth/chenageTab`
};

export const loadCards = createAction(ActionType.LOAD_CARDS, (cards) => ({payload: cards}));
export const loadProjects = createAction(ActionType.LOAD_PROJECTS, (projects) => ({payload: projects}));
export const changeCompliteStatus = createAction(ActionType.COMPLITE_CARD, (id, status) => ({payload: {id, status}}));
export const updateCard = createAction(ActionType.UPDATE_CARD, (card) => ({payload: card}));
export const changeAddCardStatus = createAction(ActionType.CHANGE_ADD_CARD, (status) => ({payload: status}));
export const addCard = createAction(ActionType.ADD_CARD, (card) => ({payload: card}));
export const addProject = createAction(ActionType.ADD_PROJECT, (project) => ({payload: project}));
export const deleteCard = createAction(ActionType.DELETE_CARD, (id) => ({payload: id}));
export const signIn = createAction(ActionType.SIGN_IN, (answer) => ({payload: answer}));
export const resetMessage = createAction(ActionType.RESET_MESSAGE);
export const authorization = createAction(ActionType.AUTHORIZATION, (action, email) => ({payload: {action, email}}));
export const authorizationFailed = createAction(ActionType.AUTHORIZATION_FAIL, (error) => ({payload: error}));
export const authorizationSucces = createAction(ActionType.AUTHORIZATION_SUCCES, (succes) => ({payload: succes}));
export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({payload: url}));
export const changeLoadProjectsStatus = createAction(ActionType.CHANGE_LOAD_PROJECTS_STATUS);
export const changeLoadCardsStatus = createAction(ActionType.CHANGE_LOAD_CARDS_STATUS);
export const setProject = createAction(ActionType.SET_PROJECT, (id) => ({payload: id}));
export const changeAuthTab = createAction(ActionType.CHANGE_AUTH_TAB, (tab) => ({payload: tab}));
