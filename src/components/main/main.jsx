import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import CheckList from "../checklist/checklist";
import Filters from "../filters/filters";
import NewElements from "../new-elements/new-elements";

const Main = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <h1 className="visually-hidden">Чек-лист</h1>
        <header className="main__top top">
          <Filters />
          <NewElements />
        </header>
        <CheckList />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Main;
