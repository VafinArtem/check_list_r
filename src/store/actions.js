import { createAction } from "@reduxjs/toolkit";

export const ActionType = {
  LOAD_CARDS: `cards/loadCards`,
  COMPLITE_CARD: `cards/compliteCards`,
  UPDATE_CARD: `cards/update`,
};

export const loadCards = createAction(ActionType.LOAD_CARDS, (cards) => ({
  payload: cards,
}));
export const changeCompliteStatus = createAction(
  ActionType.COMPLITE_CARD,
  (id, status) => ({ payload: { id, status } })
);
export const updateCard = createAction(ActionType.UPDATE_CARD, (card) => ({
  payload: card,
}));
