import { createSelector } from "reselect";
import { NameSpace } from "../main-reducer";

export const getCards = (state) => state[NameSpace.CARDS].cards;
