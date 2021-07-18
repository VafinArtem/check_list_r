import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ToastTypes} from "../../consts";
import {resetMessage} from "../../store/actions";
import {newUser} from "../../store/api-actions";
import {NameSpace} from "../../store/main-reducer";
import Toast from "../toast/toast";

const SignIn = () => {
  const dispatch = useDispatch();

  const showAuthorizationMessage = useSelector((state) => state[NameSpace.AUTH].showAuthorizationMessage);
  const authorizationMessage = useSelector((state) => state[NameSpace.AUTH].authorizationMessage);

  const [showToast, setShowToast] = useState(false);

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
      // eslint-disable-next-line no-console
      console.log(`Пароли не совпадают`);
    }
  };

  useEffect(() => {
    if (showAuthorizationMessage) {
      setShowToast(true);
      dispatch(resetMessage());
    }
  }, [showAuthorizationMessage]);

  return (
    <div className="login__wrapper">
      {showToast ? <Toast message={authorizationMessage} type={ToastTypes.ERROR} show={showToast} setShow={setShowToast} hideTimer={3000} /> : ``}
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
