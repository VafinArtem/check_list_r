import React from 'react';
import PropTypes from 'prop-types';
import {editTextCard, removeCard} from '../../store/api-actions';
import {useDispatch} from 'react-redux';

const CardControls = ({id, text, editCard, updatedText, setEditCard}) => {
  const dispatch = useDispatch();

  return (
    <div className="checklist__controls">
      <button
        className={`checklist__control  checklist__control--${
          !editCard ? `edit` : `save`
        }`}
        aria-label="Редактировать"
        onClick={() => {
          if (editCard) {
            if (updatedText !== text) {
              dispatch(editTextCard(id, updatedText));
            }
          }
          setEditCard(!editCard);
        }}
      />
      <button
        className="checklist__control checklist__control--delete"
        aria-label="Удалить"
        onClick={() => dispatch(removeCard(id))}
      />
    </div>
  );
};

CardControls.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  editCard: PropTypes.bool.isRequired,
  updatedText: PropTypes.string.isRequired,
  setEditCard: PropTypes.func.isRequired
};

export default CardControls;
