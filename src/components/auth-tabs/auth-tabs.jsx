import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AuthTab} from "../../consts";
import {changeAuthTab} from "../../store/actions";
import {NameSpace} from "../../store/main-reducer";

const AuthTabs = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state[NameSpace.AUTH].activeTab);

  return (
    <div className="login__tabs">
      <div className="login__tab-wrapper">
        <button className={`login__tab ${activeTab === AuthTab.LOGIN ? `login__tab--active` : ``}`} onClick={() => {
          dispatch(changeAuthTab(AuthTab.LOGIN));
        }}>Авторизация</button>
      </div>
      <div className="login__tab-wrapper">
        <button className={`login__tab ${activeTab === AuthTab.SIGN_IN ? `login__tab--active` : ``}`} onClick={() => {
          dispatch(changeAuthTab(AuthTab.SIGN_IN));
        }}>Регистрация</button>
      </div>
    </div>
  );
};

export default AuthTabs;
