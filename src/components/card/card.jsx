const Card = ({ text, id }) => {
  return (
    <li className="checklist__item checklist__item--complite">
      <div className="checklist__inner checklist__inner--complite">
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
            defaultChecked
          />
          <span className="checklist__check-box" />
          <span className="checklist__name">{text}</span>
        </label>
        {text.length > 110 ? (
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
