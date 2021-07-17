import {combineReducers} from "redux";
import {auth} from "./auth/auth";
import {cards} from "./cards/cards";

export const NameSpace = {
  CARDS: `CARDS`,
  AUTH: `AUTH`,
};

export default combineReducers({
  [NameSpace.CARDS]: cards,
  [NameSpace.AUTH]: auth
});
