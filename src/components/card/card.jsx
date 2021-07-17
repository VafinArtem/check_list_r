import React, {useState} from "react";
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import {MAX_SYMBOLS} from "../../consts";
import {editTextCard} from '../../store/api-actions';
import CheckboxInput from "../checkbox-input/checkbox-input";
import TextareaInput from "../textarea-input/textarea-input";

const Card = ({text, id, isComplite}) => {
  const dispatch = useDispatch();

  const [updatedText, setUpdatedText] = useState(text);

  const [fullText, setFullText] = useState(false);
  const [editCard, setEditCard] = useState(false);
  return (
    <li className={`checklist__item ${isComplite ? `checklist__item--complite` : ``}`}>
      <div className={`checklist__inner ${isComplite ? `checklist__inner--complite` : ``} ${fullText ? `checklist__inner--showed` : ``}`}>
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
          />
        </div>
        {!editCard ? (
          <CheckboxInput
            id={id}
            text={text}
            isComplite={isComplite}
            fullComment={fullText}
          />
        ) : (
          <TextareaInput text={text} setUpdatedText={setUpdatedText} />
        )}
        {text.length > MAX_SYMBOLS ? (
          <button className={`checklist__show-button ${fullText ? `checklist__show-button--showed` : ``}`}
            aria-label="Показать весь текст" onClick={() => setFullText(!fullText)}
          />) : (``)}
      </div>
    </li>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  isComplite: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Card;
