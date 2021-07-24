import {createReducer} from "@reduxjs/toolkit";
import {ActionType} from "../actions";

const initialState = {
  projects: [],
  isLoaded: false,
};

// const findCardIndex = (cards, id) => cards.findIndex((card) => card.id === id);

const projects = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.LOAD_PROJECTS, (state, action) => {
    state.projects = action.payload;
    state.isLoaded = true;
  });

  builder.addCase(ActionType.ADD_PROJECT, (state, action) => {
    state.projects.push(action.payload.project);
  });
});

export {projects};
