import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ToastTypes} from "../../consts";
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

  const loginRef = useRef();
  const passwordRef = useRef();
  const rePasswordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (passwordRef.current.value === rePasswordRef.current.value) {
      const regData = {
        email: loginRef.current.value,
        password: passwordRef.current.value,
      };
      dispatch(newUser(regData));
    } else {
      setToastMessage(`Пароли не совпадают`);
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
          <input ref={loginRef} type="email" name="email" className="login__input" placeholder="Введите e-mail" />
        </label>
        <label className="login__input-wrapper">
          <span className="visually-hidden">Введите пароль</span>
          <input ref={passwordRef} type="password" name="password" className="login__input" placeholder="Введите пароль" />
        </label>
        <label className="login__input-wrapper">
          <span className="visually-hidden">Подтвердите пароль</span>
          <input ref={rePasswordRef} type="password" name="repassword" className="login__input" placeholder="Подтвердите пароль" />
        </label>
        <button className="login__sunbmit button button--form">Регистрация</button>
      </form>
    </div>
  );
};

export default SignIn;
