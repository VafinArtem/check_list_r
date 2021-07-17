import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

const Login = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="main main--login">
        <h1 className="visually-hidden">Регистрация и авторизация</h1>
        <section className="main__login login">
          <div className="login__tabs">
            <div className="login__tab-wrapper">
              <button className="login__tab login__tab--active">Авторизация</button>
            </div>
            <div className="login__tab-wrapper">
              <button className="login__tab">Регистрация</button>
            </div>
          </div>
          <div className="login__container">
            <div className="login__wrapper login__wrapper--active">
              <h2 className="login__title">Авторизация</h2>
              <form action="/" className="login__form">
                <label className="login__input-wrapper">
                  <span className="visually-hidden">Введите e-mail</span>
                  <input type="text" name="email" className="login__input" placeholder="Введите e-mail" />
                </label>
                <label className="login__input-wrapper">
                  <span className="visually-hidden">Введите пароль</span>
                  <input type="text" name="password" className="login__input" placeholder="Введите пароль" />
                </label>
                <button className="login__sunbmit button button--form">Войти</button>
              </form>
            </div>
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
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Login;
