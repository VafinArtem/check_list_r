import React from 'react';
import PropTypes from 'prop-types';
import {editTextCard, removeCard} from '../../store/api-actions';
import {useDispatch} from 'react-redux';
import ControlButton from '../control-button/control-button';

const CardControls = ({id, text, editCard, updatedText, setEditCard}) => {
  const dispatch = useDispatch();

  return (
    <div className="checklist__controls">
      <ControlButton editCard={editCard} title={`Редактировать`} handleClick={() => {
        if (editCard) {
          if (updatedText !== text) {
            dispatch(editTextCard(id, updatedText));
          }
        }
        setEditCard(!editCard);
      }} />
      <ControlButton deleteCard={true} title={`Удалить`} handleClick={() => dispatch(removeCard(id))}/>
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
