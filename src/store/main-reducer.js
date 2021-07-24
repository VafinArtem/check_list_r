import {combineReducers} from "redux";
import {auth} from "./auth/auth";
import {cards} from "./cards/cards";
import {projects} from "./projects/projects";

export const NameSpace = {
  CARDS: `CARDS`,
  PROJECTS: `PROJECTS`,
  AUTH: `AUTH`,
};

export default combineReducers({
  [NameSpace.CARDS]: cards,
  [NameSpace.PROJECTS]: projects,
  [NameSpace.AUTH]: auth
});
