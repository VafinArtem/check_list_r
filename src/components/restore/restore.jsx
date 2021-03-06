import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RegularExp, ToastTypes, ValidationMessages} from "../../consts";
import {restorePassword} from "../../store/api-actions";
import {NameSpace} from "../../store/main-reducer";
import {resetMessage} from "../../store/actions";
import LoginInput from "../loginInput/input";
import Toast from "../toast/toast";

const Restore = () => {
  const dispatch = useDispatch();

  const showErrorAuthorizationMessage = useSelector((state) => state[NameSpace.AUTH].showErrorAuthorizationMessage);
  const showSuccesAuthorizationMessage = useSelector((state) => state[NameSpace.AUTH].showSuccesAuthorizationMessage);
  const authorizationMessage = useSelector((state) => state[NameSpace.AUTH].authorizationMessage);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState(``);
  const [toastType, setToastType] = useState(``);
  const [validate, setValidate] = useState({
    emailLength: false,
    emailRegExp: false,
  });

  const loginRef = useRef();

  const handleInput = () => {
    setValidate({
      emailLength: loginRef.current.value.length !== 0,
      emailRegExp: loginRef.current.value.match(RegularExp.EMAIL) !== null,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (validate.emailRegExp && validate.emailLength) {
      dispatch(restorePassword({
        email: loginRef.current.value,
      }));
    } else if (!validate.emailLength) {
      setToastMessage(ValidationMessages.EMAIL_LENGTH);
      setToastType(ToastTypes.ERROR);
      setShowToast(true);
    } else if (!validate.emailRegExp) {
      setToastMessage(ValidationMessages.WRONG_EMAIL);
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
    <React.Fragment>
      <main className="main main--login">
        <section className="main__login login">
          <div className="login__container">
            <div className="login__wrapper login__wrapper--active">
              {showToast ? <Toast message={toastMessage} type={toastType} show={showToast} setShow={setShowToast} hideTimer={3000} /> : ``}
              <h1 className="login__title">???????????????????????????? ????????????</h1>
              <form action="/" className="login__form" onSubmit={handleSubmit}>
                <LoginInput
                  ref={loginRef}
                  title={`?????????????? e-mail`}
                  type={`email`}
                  placeholder={`?????????????? e-mail`}
                  handleInput={handleInput}
                />
                <button className="login__sunbmit button button--form">????????????????????????</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Restore;
