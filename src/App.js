import React from "react";
import Footer from "./components/footer/footers";
import Header from "./components/header/header";
import Main from "./components/main/main";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
};

export default App;
