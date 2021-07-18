import browserHistory from "../browser-history";
import {AuthorizationStatus, Url} from "../consts";
import {addCard, authorization, changeCompliteStatus, deleteCard, loadCards, redirectToRoute, signIn, updateCard} from "./actions";

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
      // eslint-disable-next-line no-console
      dispatch(deleteCard(id));
    })
    .catch(() => {});

export const newUser = (userData) => (dispatch, _getState, api) =>
  api
    .post(`${ApiRoute.SIGN_IN}`, userData)
    .then(({data}) => dispatch(signIn(data)))
    .catch(() => {});

export const login = (userData) => (dispatch, _getState, api) => (
  api.post(ApiRoute.LOGIN, userData)
    .then(() => dispatch(authorization({auth: AuthorizationStatus.AUTH, email: userData.email})))
    .then(() => dispatch(redirectToRoute(Url.MAIN)))
    .catch(() => {})
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.LOGOUT)
    .then(() => dispatch(authorization({auth: AuthorizationStatus.NO_AUTH, email: ``})))
    .then(() => {
      if (browserHistory.location.pathname !== Url.MAIN) {
        dispatch(redirectToRoute(Url.MAIN));
      }
    })
);
