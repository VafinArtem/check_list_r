import React from "react";

const AuthTabs = () => {
  return (
    <div className="login__tabs">
      <div className="login__tab-wrapper">
        <button className="login__tab login__tab--active">Авторизация</button>
      </div>
      <div className="login__tab-wrapper">
        <button className="login__tab">Регистрация</button>
      </div>
    </div>
  );
};

export default AuthTabs;
