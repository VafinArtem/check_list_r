import React from "react";
import {Link} from "react-router-dom";
import {Url} from "../../consts";
import Footer from "../footer/footer";
import Header from "../header/header";

const NotFoundPage = () => {
  return <React.Fragment>
    <Header />
    <main className="main main--login">
      <h1>Страница не найдена</h1>
      <Link to={Url.MAIN}>Вернуться на главную</Link>
    </main>
    <Footer />
  </React.Fragment>;
};

export default NotFoundPage;
