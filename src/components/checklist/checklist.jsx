import React from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ListTypes} from "../../consts";
import {fetchCards} from "../../store/api-actions";
import {NameSpace} from "../../store/main-reducer";
import List from "../list/list";

const CheckList = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state[NameSpace.CARDS].cards);
  const isLoaded = useSelector((state) => state[NameSpace.CARDS].isLoaded);

  useEffect(() => {
    if (!isLoaded) {
      dispatch(fetchCards());
    }
  }, [dispatch, isLoaded]);

  const compliteCards = cards.filter((card) => card.isComplite);
  const notComplitedCards = cards.filter((card) => !card.isComplite);
  return (
    <section className="main__checklist checklist">
      <h2 className="checklist__title visually-hidden">Проект: maffin.pw</h2>
      <List title={ListTypes.IN_PROCESS} cards={notComplitedCards} />
      <List title={ListTypes.IS_READY} cards={compliteCards} />
    </section>
  );
};

export default CheckList;
