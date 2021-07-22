import browserHistory from "../browser-history";
import {AuthorizationStatus, Url} from "../consts";
import {addCard, authorization, authorizationFailed, changeCompliteStatus, changeLoadStatus, deleteCard, loadCards, redirectToRoute, signIn, updateCard} from "./actions";

const ApiRoute = {
  CARDS: `/cards`,
  COMPLITE: `/cards/complite`,
  EDIT: `/cards/edit`,
  ADD: `/cards/add`,
  DELETE: `/cards/delete`,
  SIGN_IN: `/auth/signin`,
  LOGIN: `/auth/login`,
  LOGOUT: `/auth/logout`
};

export const fetchCards = () => (dispatch, _getState, api) =>
  api
    .get(ApiRoute.CARDS)
    .then(({data}) => dispatch(loadCards(data)))
    .catch(() => {});

export const fetchCompliteStatus = (id, status) => (dispatch, _getState, api) =>
  api
    .post(`${ApiRoute.COMPLITE}/${id}/${+status}`)
    .then(() => {
      dispatch(changeCompliteStatus(id, status));
    })
    .catch(() => {});

export const editTextCard = (id, text) => (dispatch, _getState, api) =>
  api
    .post(`${ApiRoute.EDIT}/${id}`, {text})
    .then(({data}) => dispatch(updateCard(data, id)))
    .catch(() => {});

export const fetchNewCard = (text) => (dispatch, _getState, api) =>
  api
    .post(`${ApiRoute.ADD}`, {text})
    .then(({data}) => {
      dispatch(addCard(data));
    })
    .catch(() => {});

export const removeCard = (id) => (dispatch, _getState, api) =>
  api
    .delete(`${ApiRoute.DELETE}/${id}`)
    .then(() => {
      dispatch(deleteCard(id));
    })
    .catch(() => {});

export const newUser = (userData) => (dispatch, _getState, api) =>
  api
    .post(`${ApiRoute.SIGN_IN}`, userData)
    .then(({data}) => {
      if (data.error) {
        dispatch(authorizationFailed(data.error));
      } else {
        dispatch(signIn(data.succes));
      }
    })
    .catch(() => {});

export const login = (userData) => (dispatch, _getState, api) => (
  api.post(ApiRoute.LOGIN, userData)
    .then(({data}) => {
      if (data.error) {
        dispatch(authorizationFailed(data.error));
      } else {
        dispatch(authorization(AuthorizationStatus.AUTH, userData.email));
        dispatch(redirectToRoute(Url.MAIN));
        dispatch(changeLoadStatus());
      }
    })
    .catch(() => {})
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.LOGOUT)
    .then(() => dispatch(authorization(AuthorizationStatus.NO_AUTH)))
    .then(() => {
      dispatch(changeLoadStatus());
      if (browserHistory.location.pathname !== Url.MAIN) {
        dispatch(redirectToRoute(Url.MAIN));
      }
    })
);

export const checkLogin = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.LOGIN)
    .then(({data}) => {
      dispatch(authorization(AuthorizationStatus.AUTH, data.email));
    })
    .catch(() => {})
);
