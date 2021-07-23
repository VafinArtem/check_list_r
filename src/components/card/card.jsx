import React, {useState} from "react";
import PropTypes from 'prop-types';
import {AuthorizationStatus, MAX_SYMBOLS} from "../../consts";
import CheckboxInput from "../checkbox-input/checkbox-input";
import TextareaInput from "../textarea-input/textarea-input";
import CardControls from "../card-controls/card-controls";
import {NameSpace} from "../../store/main-reducer";
import {useSelector} from "react-redux";

const Card = ({text, id, isComplite}) => {
  const authorizationStatus = useSelector((state) => state[NameSpace.AUTH].authorizationStatus);

  const [updatedText, setUpdatedText] = useState(text);
  const [fullText, setFullText] = useState(false);
  const [editCard, setEditCard] = useState(false);

  return (
    <li className={`checklist__item ${isComplite ? `checklist__item--complite` : ``}`}>
      <div className={`checklist__inner ${isComplite ? `checklist__inner--complite` : ``} ${fullText ? `checklist__inner--showed` : ``}`}>
        {authorizationStatus === AuthorizationStatus.AUTH ? <CardControls
          editCard={editCard}
          updatedText={updatedText}
          text={text}
          setEditCard={setEditCard}
          id={id}
        /> : ``}
        {!editCard ? (
          <CheckboxInput
            id={id}
            text={text}
            isComplite={isComplite}
            fullText={fullText}
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
