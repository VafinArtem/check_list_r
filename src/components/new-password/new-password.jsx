import React, {useRef, useState} from "react";
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import {MIN_PASSWORD_LENGTH, ToastTypes, ValidationMessages} from "../../consts";
import {newPassword} from "../../store/api-actions";
import LoginInput from "../loginInput/input";
import Toast from "../toast/toast";

const NewPassword = ({token}) => {
  const dispatch = useDispatch();

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState(``);
  const [toastType, setToastType] = useState(``);
  const [validate, setValidate] = useState({
    passwordlength: false,
    passwordMatch: false,
  });

  const passwordRef = useRef();
  const rePasswordRef = useRef();

  const handleInput = () => setValidate({
    passwordlength: passwordRef.current.value.length >= MIN_PASSWORD_LENGTH,
    passwordMatch: passwordRef.current.value === rePasswordRef.current.value,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (validate.passwordlength && validate.passwordMatch) {
      dispatch(newPassword({
        token,
        password: passwordRef.current.value,
      }));
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
  return (
    <React.Fragment>
      <main className="main main--login">
        <section className="main__login login">
          <div className="login__container">
            <div className="login__wrapper login__wrapper--active">
              {showToast ? <Toast message={toastMessage} type={toastType} show={showToast} setShow={setShowToast} hideTimer={3000} /> : ``}
              <h1 className="login__title">Смена пароля</h1>
              <form action="/" className="login__form" onSubmit={handleSubmit}>
                <LoginInput
                  ref={passwordRef}
                  title={`Введите пароль`}
                  type={`password`}
                  placeholder={`Введите пароль`}
                  handleInput={handleInput}
                />
                <LoginInput
                  ref={rePasswordRef}
                  title={`Подтвердите пароль`}
                  type={`password`}
                  placeholder={`Подтвердите пароль`}
                  handleInput={handleInput}
                />
                <button className="login__sunbmit button button--form">Изменить пароль</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

NewPassword.propTypes = {
  token: PropTypes.string.isRequired,
};

export default NewPassword;
