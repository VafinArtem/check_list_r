import React, {forwardRef} from "react";
import PropTypes from 'prop-types';

const LoginInput = forwardRef(({title, placeholder, type, handleInput}, ref) => {
  LoginInput.displayName = `LoginInput`;

  return (<label className="login__input-wrapper">
    <span className="visually-hidden">{title}</span>
    <input ref={ref} type={type} name="email" className={`login__input`} placeholder={placeholder} onInput={() => handleInput()} />
  </label>);
});

LoginInput.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
};

export default LoginInput;
