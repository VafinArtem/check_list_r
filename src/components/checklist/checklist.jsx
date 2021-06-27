import { ListTypes } from "../../consts";
import List from "../list/list";

const CheckList = ({ cards }) => {
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
