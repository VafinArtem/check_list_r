import React, {useRef} from "react";
import {useDispatch} from "react-redux";
import {login} from "../../store/api-actions";

const LogIn = () => {
  const dispatch = useDispatch();

  const loginRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(login({
      email: loginRef.current.value,
      password: passwordRef.current.value,
    }));
  };

  return (
    <div className="login__wrapper login__wrapper--active">
      <h2 className="login__title">Авторизация</h2>
      <form action="/" className="login__form" onSubmit={handleSubmit}>
        <label className="login__input-wrapper">
          <span className="visually-hidden">Введите e-mail</span>
          <input ref={loginRef} type="email" name="email" className="login__input" placeholder="Введите e-mail" />
        </label>
        <label className="login__input-wrapper">
          <span className="visually-hidden">Введите пароль</span>
          <input ref={passwordRef} type="password" name="password" className="login__input" placeholder="Введите пароль" />
        </label>
        <button className="login__sunbmit button button--form">Войти</button>
      </form>
    </div>
  );
};

export default LogIn;
