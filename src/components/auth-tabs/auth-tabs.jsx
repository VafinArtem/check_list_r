import React from "react";
import {AuthTab} from "../../consts";
import Tab from '../tab/tab';

const AuthTabs = () => {
  return (
    <div className="login__tabs">
      <Tab title={`Авторизация`} type={AuthTab.LOGIN} />
      <Tab title={`Регистрация`} type={AuthTab.SIGN_IN} />
    </div>
  );
};

export default AuthTabs;
