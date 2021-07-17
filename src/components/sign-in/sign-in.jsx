import React from "react";

const SignIn = () => {
  return (
    <div className="login__wrapper">
      <h2 className="login__title">Регистрация</h2>
      <form action="/" className="login__form">
        <label className="login__input-wrapper">
          <span className="visually-hidden">Введите e-mail</span>
          <input type="text" name="email" className="login__input" placeholder="Введите e-mail" />
        </label>
        <label className="login__input-wrapper">
          <span className="visually-hidden">Введите пароль</span>
          <input type="text" name="password" className="login__input" placeholder="Введите пароль" />
        </label>
        <label className="login__input-wrapper">
          <span className="visually-hidden">Подтвердите пароль</span>
          <input type="text" name="repassword" className="login__input" placeholder="Подтвердите пароль" />
        </label>
        <button className="login__sunbmit button button--form">Регистрация</button>
      </form>
    </div>
  );
};

export default SignIn;
