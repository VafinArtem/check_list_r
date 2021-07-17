import React from "react";
import PropTypes from 'prop-types';

const TextareaInput = ({text, setUpdatedText}) => {
  return (
    <label className="checklist__box checklist__box--edit">
      <span className="visually-hidden">Редактировать текст</span>
      <textarea
        name="card_text"
        className="checklist__edit"
        defaultValue={text ? text.trim() : ``}
        onInput={(evt) => setUpdatedText(evt.target.value)}
      />
    </label>
  );
};

TextareaInput.propTypes = {
  text: PropTypes.string,
  setUpdatedText: PropTypes.func
};


export default TextareaInput;
