import classNames from "classnames";
import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AuthTab, MIN_PASSWORD_LENGTH, RegularExp, ToastTypes, ValidationMessages} from "../../consts";
import {resetMessage} from "../../store/actions";
import {newUser} from "../../store/api-actions";
import {NameSpace} from "../../store/main-reducer";
import LoginInput from "../loginInput/input";
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

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setValidate({
      passwordlength: passwordRef.current.value.length >= MIN_PASSWORD_LENGTH,
      passwordMatch: passwordRef.current.value === rePasswordRef.current.value,
      emailLength: loginRef.current.value.length !== 0,
      emailRegExp: loginRef.current.value.match(RegularExp.EMAIL) !== null,
    });

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
      <form action="/" ref={formRef} className="login__form" onSubmit={handleSubmit} noValidate>
        <LoginInput
          ref={loginRef}
          title={`Введите e-mail`}
          type={`email`}
          placeholder={`Введите e-mail`}
        />
        <LoginInput
          ref={passwordRef}
          title={`Введите пароль`}
          type={`password`}
          placeholder={`Введите пароль`}
        />
        <LoginInput
          ref={rePasswordRef}
          title={`Подтвердите пароль`}
          type={`password`}
          placeholder={`Подтвердите пароль`}
        />
        <button className="login__sunbmit button button--form">Регистрация</button>
      </form>
    </div>
  );
};

export default SignIn;
