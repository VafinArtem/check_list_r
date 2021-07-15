import { changeCompliteStatus, loadCards, updateCard } from "./actions";

const ApiRoute = {
  CARDS: `/cards`,
  COMPLITE: `/cards/complite`,
  EDIT: `/cards/edit`,
};

export const fetchCards = () => (dispatch, _getState, api) =>
  api
    .get(ApiRoute.CARDS)
    .then(({ data }) => dispatch(loadCards(data)))
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
    .post(`${ApiRoute.EDIT}/${id}`, { text })
    .then(({ data }) => dispatch(updateCard(data, id)))
    .catch(() => {});
