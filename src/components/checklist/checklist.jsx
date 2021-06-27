import { ListTypes } from "../../consts";
import List from "../list/list";

const CheckList = () => {
  return (
    <section className="main__checklist checklist">
      <h2 className="checklist__title visually-hidden">Проект: maffin.pw</h2>
      <List title={ListTypes.IN_PROCESS} />
      <List title={ListTypes.IS_READY} />
    </section>
  );
};

export default CheckList;
