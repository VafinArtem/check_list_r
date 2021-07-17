import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import TextareaInput from "../textarea-input/textarea-input";
import {changeAddCardStatus} from "../../store/actions";
import {NameSpace} from "../../store/main-reducer";
import {fetchNewCard} from "../../store/api-actions";

const NewCard = () => {
  const dispatch = useDispatch();
  const isAddCard = useSelector((state) => state[NameSpace.CARDS].isAddCard);

  const [updatedText, setUpdatedText] = useState(``);

  return (
    <li className={`checklist__item`}>
      <div className={`checklist__inner`}>
        <div className="checklist__controls">
          <button
            className="checklist__control  checklist__control--save"
            aria-label="Редактировать"
            onClick={() => {
              dispatch(fetchNewCard(updatedText));
            }}
          />
          <button
            className="checklist__control checklist__control--delete"
            aria-label="Удалить"
            onClick={() => {
              dispatch(changeAddCardStatus(!isAddCard));
            }}
          />
        </div>
        <TextareaInput
          setUpdatedText={setUpdatedText}
        />
      </div>
    </li>
  );
};

export default NewCard;
