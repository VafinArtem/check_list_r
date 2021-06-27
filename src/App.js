import React from "react";
import Footer from "./components/footer/footers";
import Header from "./components/header/header";
import Main from "./components/main/main";

const App = ({ cards }) => {
  return (
    <React.Fragment>
      <div className={`body__wrapper`}>
        <Header />
        <Main cards={cards} />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
