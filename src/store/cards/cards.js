import {createReducer} from "@reduxjs/toolkit";
import {ActionType} from "../actions";

const initialState = {
  cards: [],
  isAddCard: false
};

const findCardIndex = (cards, id) => cards.findIndex((card) => card.id === id);

const cards = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.LOAD_CARDS, (state, action) => {
    state.cards = action.payload;
  });

  builder.addCase(ActionType.COMPLITE_CARD, (state, action) => {
    const currentIndexCard = findCardIndex(state.cards, action.payload.id);
    state.cards[currentIndexCard] = Object.assign(
        {},
        state.cards[currentIndexCard],
        {isComplite: action.payload.status}
    );
  });
  builder.addCase(ActionType.UPDATE_CARD, (state, action) => {
    const currentIndexCard = findCardIndex(state.cards, action.payload.id);
    state.cards[currentIndexCard] = action.payload;
  });
  builder.addCase(ActionType.CHANGE_ADD_CARD, (state, action) => {
    state.isAddCard = action.payload;
  });
  builder.addCase(ActionType.ADD_CARD, (state, action) => {
    state.cards.push(action.payload.card);
    state.isAddCard = false;
  });
  builder.addCase(ActionType.DELETE_CARD, (state, action) => {
    const currentIndexCard = findCardIndex(state.cards, action.payload);
    state.cards.splice(currentIndexCard, 1);
  });
});

export {cards};
