import { connect, useSelector } from "react-redux";
import { ListTypes } from "../../consts";
import { getCards } from "../../store/cards/selectors";
import { NameSpace } from "../../store/main-reducer";
import List from "../list/list";

const CheckList = () => {
  const cards = useSelector((state) => state[NameSpace.CARDS].cards);

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
