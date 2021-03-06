import classNames from "classnames";
import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {AuthTab, MIN_PASSWORD_LENGTH, RegularExp, ToastTypes, Url, ValidationMessages} from "../../consts";
import {resetMessage} from "../../store/actions";
import {login} from "../../store/api-actions";
import {NameSpace} from "../../store/main-reducer";
import LoginInput from "../loginInput/input";
import Toast from "../toast/toast";

const LogIn = () => {
  const dispatch = useDispatch();

  const showErrorAuthorizationMessage = useSelector((state) => state[NameSpace.AUTH].showErrorAuthorizationMessage);
  const authorizationMessage = useSelector((state) => state[NameSpace.AUTH].authorizationMessage);
  const activeTab = useSelector((state) => state[NameSpace.AUTH].activeTab);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState(``);
  const [toastType, setToastType] = useState(``);
  const [validate, setValidate] = useState({
    passwordLength: false,
    emailLength: false,
    emailRegExp: false,
  });

  const loginRef = useRef();
  const passwordRef = useRef();

  const handleInput = () => {
    setValidate({
      passwordLength: passwordRef.current.value.length >= MIN_PASSWORD_LENGTH,
      emailLength: loginRef.current.value.length !== 0,
      emailRegExp: loginRef.current.value.match(RegularExp.EMAIL) !== null,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (validate.passwordLength && validate.emailRegExp && validate.emailLength) {
      dispatch(login({
        email: loginRef.current.value,
        password: passwordRef.current.value,
      }));
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
    <div className={classNames(`login__wrapper`, {
      [`login__wrapper--active`]: activeTab === AuthTab.LOGIN
    })}>
      {showToast ? <Toast message={toastMessage} type={toastType} show={showToast} setShow={setShowToast} hideTimer={3000} /> : ``}
      <h2 className="login__title">??????????????????????</h2>
      <form action="/" className="login__form" onSubmit={handleSubmit}>
        <LoginInput
          ref={loginRef}
          title={`?????????????? e-mail`}
          type={`email`}
          placeholder={`?????????????? e-mail`}
          handleInput={handleInput}
        />
        <LoginInput
          ref={passwordRef}
          title={`?????????????? ????????????`}
          type={`password`}
          placeholder={`?????????????? ????????????`}
          handleInput={handleInput}
        />
        <button className="login__sunbmit button button--form">??????????</button>
        <Link to={Url.RESTORE} className="login__restore">???????????? ?????????????</Link>
      </form>
    </div>
  );
};

export default LogIn;
