import classNames from "classnames";
import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AuthTab, MIN_PASSWORD_LENGTH, RegularExp, ToastTypes, ValidationMessages} from "../../consts";
import {resetMessage} from "../../store/actions";
import {newUser} from "../../store/api-actions";
import {NameSpace} from "../../store/main-reducer";
import Toast from "../toast/toast";

const SignIn = () => {
  const dispatch = useDispatch();

  const showErrorAuthorizationMessage = useSelector((state) => state[NameSpace.AUTH].showErrorAuthorizationMessage);
  const authorizationMessage = useSelector((state) => state[NameSpace.AUTH].authorizationMessage);
  const showSuccesAuthorizationMessage = useSelector((state) => state[NameSpace.AUTH].showSuccesAuthorizationMessage);
  const activeTab = useSelector((state) => state[NameSpace.AUTH].activeTab);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState(``);
  const [toastType, setToastType] = useState(``);
  const [validate, setValidate] = useState({
    passwordLength: false,
    passwordMatch: false,
    emailLength: false,
    emailRegExp: false,
  });

  const formRef = useRef();
  const loginRef = useRef();
  const passwordRef = useRef();
  const rePasswordRef = useRef();

  const handleInput = () => {
    setValidate({
      passwordlength: passwordRef.current.value.length >= MIN_PASSWORD_LENGTH,
      passwordMatch: passwordRef.current.value === rePasswordRef.current.value,
      emailLength: loginRef.current.value.length !== 0,
      emailRegExp: loginRef.current.value.match(RegularExp.EMAIL) !== null,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (validate.passwordlength && validate.passwordMatch && validate.emailRegExp && validate.emailLength) {
      dispatch(newUser({
        email: loginRef.current.value,
        password: passwordRef.current.value,
      }));
      formRef.current.reset();
    } else if (!validate.emailLength) {
      setToastMessage(ValidationMessages.EMAIL_LENGTH);
      setToastType(ToastTypes.ERROR);
      setShowToast(true);
    } else if (!validate.emailRegExp) {
      setToastMessage(ValidationMessages.WRONG_EMAIL);
      setToastType(ToastTypes.ERROR);
      setShowToast(true);
    } else if (!validate.passwordLength) {
      setToastMessage(ValidationMessages.PASSWORD_LENGTH);
      setToastType(ToastTypes.ERROR);
      setShowToast(true);
    } else if (!validate.passwordMatch) {
      setToastMessage(ValidationMessages.MISMATCH_PASSWORDS);
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
    <div className={classNames(`login__wrapper`, {
      [`login__wrapper--active`]: activeTab === AuthTab.SIGN_IN
    })}>
      {showToast ? <Toast message={toastMessage} type={toastType} show={showToast} setShow={setShowToast} hideTimer={3000} /> : ``}
      <h2 className="login__title">Регистрация</h2>
      <form action="/" className="login__form" onSubmit={handleSubmit} noValidate>
        <label className="login__input-wrapper">
          <span className="visually-hidden">Введите e-mail</span>
          <input ref={loginRef} type="email" name="email" className={`login__input`} placeholder="Введите e-mail" onInput={handleInput} />
          {/* <input ref={loginRef} type="email" name="email" className={`login__input ${!validEmail && showMessage ? `login__input--error` : ``}`} placeholder="Введите e-mail" onInput={handleEmailInput} /> */}
          {/* {!validEmail && showMessage ? <span className="login__message login__message--error">{ValidationMessages.WRONG_EMAIL}</span> : `` } */}
        </label>
        <label className="login__input-wrapper">
          <span className="visually-hidden">Введите пароль</span>
          <input ref={passwordRef} type="password" name="password" className={`login__input`} placeholder="Введите пароль" onInput={handleInput} />
          {/* <input ref={passwordRef} type="password" name="password" className={`login__input ${validPassword.length && showMessage ? `login__input--error` : ``}`} placeholder="Введите пароль" onInput={handlePasswordInput} /> */}
          {/* {validPassword.length && showMessage ? <span className="login__message login__message--error">{ValidationMessages.PASSWORD_LENGTH}</span> : ``} */}
        </label>
        <label className="login__input-wrapper">
          <span className="visually-hidden">Подтвердите пароль</span>
          <input ref={rePasswordRef} type="password" name="repassword" className={`login__input`} placeholder="Подтвердите пароль" onInput={handleInput} />
          {/* <input ref={rePasswordRef} type="password" name="repassword" className={`login__input ${validPassword.match && showMessage ? `login__input--error` : ``}`} placeholder="Подтвердите пароль" onInput={handlePasswordInput} /> */}
          {/* {validPassword.match && showMessage ? <span className="login__message login__message--error">{ValidationMessages.MISMATCH_PASSWORDS}</span> : ``} */}
        </label>
        <button className="login__sunbmit button button--form">Регистрация</button>
      </form>
    </div>
  );
};

export default SignIn;
