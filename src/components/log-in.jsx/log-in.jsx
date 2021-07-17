import React from "react";

const LogIn = () => {
  return (
    <div className="login__wrapper login__wrapper--active">
      <h2 className="login__title">Авторизация</h2>
      <form action="/" className="login__form">
        <label className="login__input-wrapper">
          <span className="visually-hidden">Введите e-mail</span>
          <input type="text" name="email" className="login__input" placeholder="Введите e-mail" />
        </label>
        <label className="login__input-wrapper">
          <span className="visually-hidden">Введите пароль</span>
          <input type="text" name="password" className="login__input" placeholder="Введите пароль" />
        </label>
        <button className="login__sunbmit button button--form">Войти</button>
      </form>
    </div>
  );
};

export default LogIn;
