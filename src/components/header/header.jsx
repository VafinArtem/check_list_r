import React from "react";
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {AuthorizationStatus, Url} from "../../consts";
import {logout} from "../../store/api-actions";
import {NameSpace} from "../../store/main-reducer";

const Header = ({setShowAbout}) => {
  const dispatch = useDispatch();
  const authorizationStatus = useSelector((state) => state[NameSpace.AUTH].authorizationStatus);
  const userName = useSelector((state) => state[NameSpace.AUTH].userName);

  return (
    <header className="header">
      <div className="header__logo logo">
        <Link to={Url.MAIN} className="logo__link">
          <img src="img/common/logo.svg" alt="Maffin Check List" width={166} height={34} className="logo__img" />
        </Link>
      </div>
      <Link to={Url.LOG_IN} className="header__auth" aria-label="Login / Logout" onClick={(evt) => {
        if (authorizationStatus === AuthorizationStatus.AUTH) {
          evt.preventDefault();
          dispatch(logout());
        }
      }}>
        {authorizationStatus === AuthorizationStatus.AUTH ? <span className="header__auth-text">{userName}</span> : ``}
        <svg className="header__icon" width={20} height={20}>
          <use xlinkHref="img/sprite.svg#icon-login" />
        </svg>
      </Link>
      <button className="header__about" aria-label="О проекте" onClick={() => setShowAbout(true)}>
        <svg className="header__icon" width={20} height={20}>
          <use xlinkHref="img/sprite.svg#icon-question" />
        </svg>
      </button>
    </header>
  );
};

Header.propTypes = {
  setShowAbout: PropTypes.func.isRequired,
};

export default Header;
