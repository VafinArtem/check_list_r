import { MAX_SYMBOLS } from "../../consts";
import { limitDescription } from "../../utils/common";

const Card = ({ text, id, isComplite }) => {
  return (
    <li
      className={`checklist__item ${
        isComplite ? `checklist__item--complite` : ``
      }`}
    >
      <div
        className={`checklist__inner ${
          isComplite ? `checklist__inner--complite` : ``
        }`}
      >
        <div className="checklist__controls">
          <button
            className="checklist__control checklist__control--edit"
            aria-label="Редактировать"
          />
          <button
            className="checklist__control checklist__control--delete"
            aria-label="Удалить"
          />
        </div>
        <label className="checklist__box">
          <input
            type="checkbox"
            name={`check-${id}`}
            className="checklist__checkbox visually-hidden"
            defaultChecked={isComplite ? true : false}
          />
          <span className="checklist__check-box" />
          <span className="checklist__name">
            {limitDescription(text, MAX_SYMBOLS)}
          </span>
        </label>
        {text.length > MAX_SYMBOLS ? (
          <button
            className="checklist__show-button"
            aria-label="Показать весь текст"
          />
        ) : (
          ``
        )}
      </div>
    </li>
  );
};

export default Card;
