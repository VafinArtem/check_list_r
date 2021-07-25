import {createReducer} from "@reduxjs/toolkit";
import {ActionType} from "../actions";

const initialState = {
  projects: [],
  isLoaded: false,
  currenProjectId: null
};

const projects = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.LOAD_PROJECTS, (state, action) => {
    state.projects = action.payload.projects;
    state.currenProjectId = !action.payload.projectId ? state.projects[0].id : action.payload.projectId;
    state.isLoaded = true;
  });
  builder.addCase(ActionType.ADD_PROJECT, (state, action) => {
    state.projects.push(action.payload.project);
  });
  builder.addCase(ActionType.SET_PROJECT, (state, action) => {
    state.currenProjectId = action.payload;
  });
  builder.addCase(ActionType.CHANGE_LOAD_PROJECTS_STATUS, (state) => {
    state.isLoaded = false;
  });
});

export {projects};
