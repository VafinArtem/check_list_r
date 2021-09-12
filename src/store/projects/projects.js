import {createReducer} from "@reduxjs/toolkit";
import {ActionType} from "../actions";

const initialState = {
  projects: [],
  isLoaded: false,
  currenProjectId: null,
  currenProjectName: ``
};

const projects = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.LOAD_PROJECTS, (state, action) => {
    state.projects = action.payload.projects;
    state.currenProjectId = parseInt(!action.payload.projectId ? state.projects[0].id : action.payload.projectId, 10);
    state.currenProjectName = state.projects.filter((project) => project.id === state.currenProjectId)[0].name;
    state.isLoaded = true;
  });
  builder.addCase(ActionType.ADD_PROJECT, (state, action) => {
    state.projects.push(action.payload.project);
    state.currenProjectName = action.payload.project.name;
  });
  builder.addCase(ActionType.SET_PROJECT, (state, action) => {
    state.currenProjectId = parseInt(action.payload, 10);
  });
  builder.addCase(ActionType.CHANGE_LOAD_PROJECTS_STATUS, (state) => {
    state.isLoaded = false;
  });
});

export {projects};
