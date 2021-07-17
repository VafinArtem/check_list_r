import React, {useRef} from "react";
import {useDispatch} from "react-redux";
import {newUser} from "../../store/api-actions";

const SignIn = () => {
  const dispatch = useDispatch();
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

  return (
    <div className="login__wrapper">
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
