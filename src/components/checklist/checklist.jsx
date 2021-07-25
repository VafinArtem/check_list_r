import React from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ListTypes} from "../../consts";
import {fetchCards, fetchProjects} from "../../store/api-actions";
import {NameSpace} from "../../store/main-reducer";
import {selectCompliteCards, selectNotCompliteCards} from "../../store/selectors/selectors";
import List from "../list/list";

const CheckList = () => {
  const dispatch = useDispatch();
  const compliteCards = useSelector(selectCompliteCards);
  const notComplitedCards = useSelector(selectNotCompliteCards);
  const projectId = useSelector((state) => state[NameSpace.PROJECTS].currenProjectId);
  const isCardsLoaded = useSelector((state) => state[NameSpace.CARDS].isLoaded);
  const isProjectsLoaded = useSelector((state) => state[NameSpace.PROJECTS].isLoaded);

  useEffect(() => {
    if (!isProjectsLoaded) {
      dispatch(fetchProjects());
    } else if (!isCardsLoaded) {
      dispatch(fetchCards(projectId));
    }
  }, [dispatch, isProjectsLoaded]);

  useEffect(() => {
    if (!isCardsLoaded && isProjectsLoaded) {
      dispatch(fetchCards(projectId));
    }
  }, [dispatch, isCardsLoaded]);

  return (
    <section className="main__checklist checklist">
      <h2 className="checklist__title visually-hidden">Проект: maffin.pw</h2>
      <List title={ListTypes.IN_PROCESS} cards={notComplitedCards} />
      <List title={ListTypes.IS_READY} cards={compliteCards} />
    </section>
  );
};

export default CheckList;
