import React from "react";
import {Link} from "react-router-dom";
import {Url} from "../../consts";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo logo">
        <Link to={Url.MAIN} className="logo__link">
          <img src="img/common/logo.svg" alt="Maffin Check List" width={166} height={34} className="logo__img" />
        </Link>
      </div>
      <Link to={Url.LOG_IN} className="header__auth">
        <svg className="header__auth-icon" width={20} height={20}>
          <use xlinkHref="img/sprite.svg#icon-login" />
        </svg>
      </Link>
    </header>
  );
};

export default Header;
