import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {MIN_PASSWORD_LENGTH, RegularExp, ToastTypes, ValidationMessages} from "../../consts";
import {resetMessage} from "../../store/actions";
import {newUser} from "../../store/api-actions";
import {NameSpace} from "../../store/main-reducer";
import Toast from "../toast/toast";

const SignIn = () => {
  const dispatch = useDispatch();

  const showErrorAuthorizationMessage = useSelector((state) => state[NameSpace.AUTH].showErrorAuthorizationMessage);
  const authorizationMessage = useSelector((state) => state[NameSpace.AUTH].authorizationMessage);
  const showSuccesAuthorizationMessage = useSelector((state) => state[NameSpace.AUTH].showSuccesAuthorizationMessage);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState(``);
  const [toastType, setToastType] = useState(``);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const loginRef = useRef();
  const passwordRef = useRef();
  const rePasswordRef = useRef();

  const handleEmailInput = () => {
    if (loginRef.current.value.match(RegularExp.EMAIL) === null) {
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }
  };

  const handlePasswordInput = () => {
    if (passwordRef.current.value !== rePasswordRef.current.value || passwordRef.current.value.length < MIN_PASSWORD_LENGTH) {
      setValidPassword({
        length: passwordRef.current.value.length < 3,
        match: passwordRef.current.value !== rePasswordRef.current.value
      });
    } else {
      setValidPassword(true);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (validEmail && typeof (validPassword) !== `object`) {
      const regData = {
        email: loginRef.current.value,
        password: passwordRef.current.value,
      };
      dispatch(newUser(regData));
    } else if (!validEmail) {
      setToastMessage(ValidationMessages.WRONG_EMAIL);
      setToastType(ToastTypes.ERROR);
      setShowToast(true);
    } else if (typeof (validPassword) === `object`) {
      if (validPassword.match) {
        setToastMessage(ValidationMessages.MISMATCH_PASSWORDS);
      } else if (validPassword.length) {
        setToastMessage(ValidationMessages.PASSWORD_LENGTH);
      }
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

  useEffect(() => {
    if (showSuccesAuthorizationMessage) {
      setToastMessage(authorizationMessage);
      setToastType(ToastTypes.SUCCES);
      setShowToast(true);
      dispatch(resetMessage());
    }
  }, [showSuccesAuthorizationMessage]);

  return (
    <div className="login__wrapper">
      {showToast ? <Toast message={toastMessage} type={toastType} show={showToast} setShow={setShowToast} hideTimer={3000} /> : ``}
      <h2 className="login__title">Регистрация</h2>
      <form action="/" className="login__form" onSubmit={handleSubmit}>
        <label className="login__input-wrapper">
          <span className="visually-hidden">Введите e-mail</span>
          <input ref={loginRef} type="email" name="email" className="login__input" placeholder="Введите e-mail" onInput={handleEmailInput} />
        </label>
        <label className="login__input-wrapper">
          <span className="visually-hidden">Введите пароль</span>
          <input ref={passwordRef} type="password" name="password" className="login__input" placeholder="Введите пароль" onInput={handlePasswordInput} />
        </label>
        <label className="login__input-wrapper">
          <span className="visually-hidden">Подтвердите пароль</span>
          <input ref={rePasswordRef} type="password" name="repassword" className="login__input" placeholder="Подтвердите пароль" onInput={handlePasswordInput} />
        </label>
        <button className="login__sunbmit button button--form">Регистрация</button>
      </form>
    </div>
  );
};

export default SignIn;
