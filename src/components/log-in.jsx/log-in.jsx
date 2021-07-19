import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ToastTypes} from "../../consts";
import {resetMessage} from "../../store/actions";
import {login} from "../../store/api-actions";
import {NameSpace} from "../../store/main-reducer";
import Toast from "../toast/toast";

const LogIn = () => {
  const dispatch = useDispatch();

  const showErrorAuthorizationMessage = useSelector((state) => state[NameSpace.AUTH].showErrorAuthorizationMessage);
  const authorizationMessage = useSelector((state) => state[NameSpace.AUTH].authorizationMessage);

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showErrorAuthorizationMessage) {
      setShowToast(true);
      dispatch(resetMessage());
    }
  }, [showErrorAuthorizationMessage]);

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
      {showToast ? <Toast message={authorizationMessage} type={ToastTypes.ERROR} show={showToast} setShow={setShowToast} hideTimer={3000} /> : ``}
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
