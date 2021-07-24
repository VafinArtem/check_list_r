import {createReducer} from "@reduxjs/toolkit";
import {ActionType} from "../actions";

const initialState = {
  projects: [],
  isLoaded: false,
  currenProjectsId: null
};

// const findCardIndex = (cards, id) => cards.findIndex((card) => card.id === id);

const projects = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.LOAD_PROJECTS, (state, action) => {
    state.projects = action.payload;
    state.currenProjectsId = state.projects[0].id;
    state.isLoaded = true;
  });

  builder.addCase(ActionType.ADD_PROJECT, (state, action) => {
    state.projects.push(action.payload.project);
  });

  builder.addCase(ActionType.SET_PROJECT, (state, action) => {
    state.currenProjectsId = action.payload;
  });
});

export {projects};
