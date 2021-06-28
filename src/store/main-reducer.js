import { combineReducers } from "redux";
import { cards } from "./cards/cards";

export const NameSpace = {
  CARDS: `CARDS`,
};

export default combineReducers({
  [NameSpace.CARDS]: cards,
});
