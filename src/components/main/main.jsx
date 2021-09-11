import React, {useState} from "react";
import About from "../about/about";
import CheckList from "../checklist/checklist";
import Filters from "../filters/filters";
import NewElements from "../new-elements/new-elements";

const Main = ({showAbout, setShowAbout}) => {

  if (!showAbout && !localStorage.confirmAbout) {
    setShowAbout(true);
  }

  return (
    <React.Fragment>
      <main className="main">
        <h1 className="visually-hidden">Чек-лист</h1>
        <header className="main__top top">
          {showAbout ? <About setShowAbout={setShowAbout} /> : ``}
          <Filters />
          <NewElements />
        </header>
        <CheckList />
      </main>
    </React.Fragment>
  );
};

export default Main;
