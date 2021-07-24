import {createSelector} from "reselect";
import {NameSpace} from "../main-reducer";

const selectAllCards = (state) => state[NameSpace.CARDS].cards;

export const selectCompliteCards = createSelector(
    selectAllCards,
    (allCards) => allCards.filter((card) => card.isComplite === true)
);

export const selectNotCompliteCards = createSelector(
    selectAllCards,
    (allCards) => allCards.filter((card) => card.isComplite === false)
);
