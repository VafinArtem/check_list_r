import { createReducer } from "@reduxjs/toolkit";
import { cardsMock } from "../../mocks/mocks";

const initialState = {
  cards: cardsMock,
};

const cards = createReducer(initialState, (builder) => {});

export { cards };
