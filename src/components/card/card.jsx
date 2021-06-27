import { useState } from "react";
import { MAX_SYMBOLS } from "../../consts";
import CheckboxInput from "../checkbox-input/checkbox-input";
import TextareaInput from "../textarea-input/textarea-input";

const Card = ({ text, id, isComplite }) => {
  const [fullComment, setFullComment] = useState(false);
  const [editCard, setEditCard] = useState(false);
  return (
    <li
      className={`checklist__item ${
        isComplite ? `checklist__item--complite` : ``
      }`}
    >
      <div
        className={`checklist__inner ${
          isComplite ? `checklist__inner--complite` : ``
        } ${fullComment ? `checklist__inner--showed` : ``}`}
      >
        <div className="checklist__controls">
          <button
            className="checklist__control checklist__control--edit"
            aria-label="Редактировать"
            onClick={() => {
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
            fullComment={fullComment}
          />
        ) : (
          <TextareaInput text={text} />
        )}
        {text.length > MAX_SYMBOLS ? (
          <button
            className={`checklist__show-button ${
              fullComment ? `checklist__show-button--showed` : ``
            }`}
            aria-label="Показать весь текст"
            onClick={() => {
              setFullComment(!fullComment);
            }}
          />
        ) : (
          ``
        )}
      </div>
    </li>
  );
};

export default Card;
