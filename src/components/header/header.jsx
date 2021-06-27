import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo logo">
        <a href="/" className="logo__link">
          <img src="img/common/logo.svg" alt="Maffin Check List" width={166} height={34} className="logo__img" />
        </a>
      </div>
      <a href="/" className="header__auth">
        <svg className="header__auth-icon" width={20} height={20}>
          <use xlinkHref="img/sprite.svg#icon-login" />
        </svg>
      </a>
    </header>
  );
};

export default Header;
