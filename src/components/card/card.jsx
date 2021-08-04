import React, {useState} from "react";
import PropTypes from 'prop-types';
import {AuthorizationStatus} from "../../consts";
import CheckboxInput from "../checkbox-input/checkbox-input";
import TextareaInput from "../textarea-input/textarea-input";
import CardControls from "../card-controls/card-controls";
import {NameSpace} from "../../store/main-reducer";
import {useSelector} from "react-redux";

const Card = ({text, id, isComplite}) => {
  const authorizationStatus = useSelector((state) => state[NameSpace.AUTH].authorizationStatus);

  const [updatedText, setUpdatedText] = useState(text);
  // const [fullText, setFullText] = useState(false);
  const [editCard, setEditCard] = useState(false);

  return (
    <li className={`checklist__item ${isComplite ? `checklist__item--complite` : ``}`}>
      <div className={`checklist__inner ${isComplite ? `checklist__inner--complite` : ``}`}>
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
          />
        ) : (
          <TextareaInput text={text} setUpdatedText={setUpdatedText} />
        )}
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
