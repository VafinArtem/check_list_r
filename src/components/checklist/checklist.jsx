import React from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AuthorizationStatus, ListTypes} from "../../consts";
import {cardsMock} from "../../mocks/mocks";
import {loadCards} from "../../store/actions";
import {fetchCards, fetchProjects} from "../../store/api-actions";
import {NameSpace} from "../../store/main-reducer";
import {selectCompliteCards, selectNotCompliteCards} from "../../store/selectors/selectors";
import Complite from "../complite/complite";
import List from "../list/list";

const CheckList = () => {
  const dispatch = useDispatch();
  const authorizationStatus = useSelector((state) => state[NameSpace.AUTH].authorizationStatus);
  const compliteCards = useSelector(selectCompliteCards);
  const notComplitedCards = useSelector(selectNotCompliteCards);
  const projectId = useSelector((state) => state[NameSpace.PROJECTS].currenProjectId);
  const isCardsLoaded = useSelector((state) => state[NameSpace.CARDS].isLoaded);
  const isProjectsLoaded = useSelector((state) => state[NameSpace.PROJECTS].isLoaded);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      if (!isProjectsLoaded) {
        dispatch(fetchProjects());
      } else if (!isCardsLoaded) {
        dispatch(fetchCards(projectId));
      }
    }
  }, [dispatch, isProjectsLoaded, authorizationStatus]);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      if (!isCardsLoaded && isProjectsLoaded) {
        dispatch(fetchCards(projectId));
      }
    } else {
      dispatch(loadCards(cardsMock));
    }
  }, [dispatch, isCardsLoaded]);

  return (
    <section className="main__checklist checklist">
      <h2 className="checklist__title visually-hidden">Проект: maffin.pw</h2>
      {!notComplitedCards.length && compliteCards.length ? <Complite /> : `` }
      <List title={ListTypes.IN_PROCESS} cards={notComplitedCards} type={ListTypes.IN_PROCESS} />
      <List title={ListTypes.IS_READY} cards={compliteCards} />
    </section>
  );
};

export default CheckList;
