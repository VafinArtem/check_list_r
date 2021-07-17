import {createAction} from "@reduxjs/toolkit";

export const ActionType = {
  LOAD_CARDS: `cards/loadCards`,
  COMPLITE_CARD: `cards/compliteCards`,
  UPDATE_CARD: `cards/update`,
  ADD_CARD: `cards/add`,
  CHANGE_ADD_CARD: `cards/changeAddStatus`,
  DELETE_CARD: `cards/delete`
};

export const loadCards = createAction(ActionType.LOAD_CARDS, (cards) => ({
  payload: cards,
}));

export const changeCompliteStatus = createAction(ActionType.COMPLITE_CARD, (id, status) => ({payload: {id, status}}));

export const updateCard = createAction(ActionType.UPDATE_CARD, (card) => ({payload: card}));
export const changeAddCardStatus = createAction(ActionType.CHANGE_ADD_CARD, (status) => ({payload: status}));
export const addCard = createAction(ActionType.ADD_CARD, (card) => ({payload: card}));
export const deleteCard = createAction(ActionType.DELETE_CARD, (id) => ({payload: id}));
