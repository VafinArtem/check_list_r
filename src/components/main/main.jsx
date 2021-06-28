import CheckList from "../checklist/checklist";
import Filters from "../filters/filters";
import NewElements from "../new-elements/new-elements";

const Main = () => {
  return (
    <main className="main">
      <h1 className="visually-hidden">Чек-лист</h1>
      <header className="main__top top">
        <Filters />
        <NewElements />
      </header>
      <CheckList />
    </main>
  );
};

export default Main;
