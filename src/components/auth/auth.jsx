import React from "react";
import AuthTabs from "../auth-tabs/auth-tabs";
import Footer from "../footer/footer";
import Header from "../header/header";
import LogIn from "../log-in.jsx/log-in";
import SignIn from "../sign-in/sign-in";

const Auth = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="main main--login">
        <h1 className="visually-hidden">Регистрация и авторизация</h1>
        <section className="main__login login">
          <AuthTabs />
          <div className="login__container">
            <LogIn />
            <SignIn />
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Auth;
