import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

const Types = {
  DEFAULT: `default`,
  SUCCES: `succes`,
  ERROR: `error`
};

const Toast = ({message, type, show, setShow, hideTimer}) => {
  useEffect(() => {
    if (show && hideTimer) {
      setTimeout(() => {
        setShow(!show);
      }, hideTimer);
    }
  }, [show]);

  return (
    <div className={`toast toast--${Types[type]}`} onClick={() => setShow(false)}>
      <p className="toast__text">{message}</p>
    </div>
  );
};


Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  hideTimer: PropTypes.number
};

export default Toast;
