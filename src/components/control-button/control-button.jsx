import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ControlButton = ({editCard, deleteCard, title, handleClick}) => {

  return (
    <button
      className={classNames(`checklist__control`, {
        [`checklist__control--edit`]: !editCard && !deleteCard,
        [`checklist__control--save`]: editCard,
        [`checklist__control--delete`]: deleteCard,
      })}
      aria-label={title}
      onClick={handleClick}
    />
  );
};

ControlButton.propTypes = {
  title: PropTypes.string.isRequired,
  editCard: PropTypes.bool,
  deleteCard: PropTypes.bool,
  handleClick: PropTypes.func.isRequired
};

export default ControlButton;
