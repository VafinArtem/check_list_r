import React from "react";
import {Link} from "react-router-dom";
import {Url} from "../../consts";

const NotFoundPage = () => {
  return <React.Fragment>
    <main className="main main--login">
      <h1>Страница не найдена</h1>
      <Link to={Url.MAIN}>Вернуться на главную</Link>
    </main>
  </React.Fragment>;
};

export default NotFoundPage;
