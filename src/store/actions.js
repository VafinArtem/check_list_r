import { createAction } from "@reduxjs/toolkit";

export const ActionType = {
  LOAD_CARDS: `cards/loadCards`,
};

export const loadCards = createAction(ActionType.LOAD_CARDS, (cards) => ({
  payload: cards,
}));
