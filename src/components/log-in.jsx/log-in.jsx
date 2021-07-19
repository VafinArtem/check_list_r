import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {MIN_PASSWORD_LENGTH, RegularExp, ToastTypes, ValidationMessages} from "../../consts";
import {resetMessage} from "../../store/actions";
import {login} from "../../store/api-actions";
import {NameSpace} from "../../store/main-reducer";
import Toast from "../toast/toast";

const LogIn = () => {
  const dispatch = useDispatch();

  const showErrorAuthorizationMessage = useSelector((state) => state[NameSpace.AUTH].showErrorAuthorizationMessage);
  const authorizationMessage = useSelector((state) => state[NameSpace.AUTH].authorizationMessage);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState(``);
  const [toastType, setToastType] = useState(``);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const loginRef = useRef();
  const passwordRef = useRef();

  const handleEmailInput = () => {
    if (loginRef.current.value.match(RegularExp.EMAIL) === null) {
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }
  };

  const handlePasswordInput = () => {
    if (passwordRef.current.value.length < MIN_PASSWORD_LENGTH) {
      setValidPassword(false);
    } else {
      setValidPassword(true);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (validPassword && validEmail) {
      dispatch(login({
        email: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    } else if (!validEmail) {
      setToastMessage(ValidationMessages.WRONG_EMAIL);
      setToastType(ToastTypes.ERROR);
      setShowToast(true);
    } else if (!validPassword) {
      setToastMessage(ValidationMessages.PASSWORD_LENGTH);
      setToastType(ToastTypes.ERROR);
      setShowToast(true);
    }
  };

  useEffect(() => {
    if (showErrorAuthorizationMessage) {
      setToastMessage(authorizationMessage);
      setToastType(ToastTypes.ERROR);
      setShowToast(true);
      dispatch(resetMessage());
    }
  }, [showErrorAuthorizationMessage]);

  return (
    <div className="login__wrapper login__wrapper--active">
      {showToast ? <Toast message={toastMessage} type={toastType} show={showToast} setShow={setShowToast} hideTimer={3000} /> : ``}
      <h2 className="login__title">Авторизация</h2>
      <form action="/" className="login__form" onSubmit={handleSubmit}>
        <label className="login__input-wrapper">
          <span className="visually-hidden">Введите e-mail</span>
          <input ref={loginRef} type="email" name="email" className="login__input" placeholder="Введите e-mail" onInput={handleEmailInput} />
        </label>
        <label className="login__input-wrapper">
          <span className="visually-hidden">Введите пароль</span>
          <input ref={passwordRef} type="password" name="password" className="login__input" placeholder="Введите пароль" onInput={handlePasswordInput} />
        </label>
        <button className="login__sunbmit button button--form">Войти</button>
      </form>
    </div>
  );
};

export default LogIn;
