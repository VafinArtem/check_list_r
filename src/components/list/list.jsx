import React from "react";

const List = ({ title }) => {
  return (
    <React.Fragment>
      <h3 className="checklist__subtitle">{title}</h3>
      <ul className="checklist__list">
        <li className="checklist__item">
          <div className="checklist__inner">
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
                name="check-1"
                className="checklist__checkbox visually-hidden"
              />
              <span className="checklist__check-box" />
              <span className="checklist__name">
                Документ проходит проверку на валидность
                https://validator.w3.org/nu/
              </span>
            </label>
          </div>
        </li>
        <li className="checklist__item">
          <div className="checklist__inner checklist__inner--showed">
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
                name="check-2"
                className="checklist__checkbox visually-hidden"
              />
              <span className="checklist__check-box" />
              <span className="checklist__name">
                В разметке отсутствует дублирование кода для одного и того же
                элемента, с помощью которого элемент отображается в разных
                местах страницы на разных версиях: мобильной, десктопной,
                планшетной
              </span>
            </label>
            <button
              className="checklist__show-button checklist__show-button--showed"
              aria-label="Скрыть"
            />
          </div>
        </li>
        <li className="checklist__item">
          <div className="checklist__inner">
            <div className="checklist__controls">
              <button
                className="checklist__control checklist__control--save"
                aria-label="Сохранить"
              />
              <button
                className="checklist__control checklist__control--delete"
                aria-label="Удалить"
              />
            </div>
            <label className="checklist__box checklist__box--edit">
              <span className="visually-hidden">Редактировать текст</span>
              <textarea
                name="card_text"
                className="checklist__edit"
                defaultValue={
                  "Подключены правильные шрифты, их размеры, цвет и толщина равны соответствующим параметрам в макетах и техническом задании."
                }
              />
            </label>
          </div>
        </li>
        <li className="checklist__item">
          <div className="checklist__inner">
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
                name="check-4"
                className="checklist__checkbox visually-hidden"
              />
              <span className="checklist__check-box" />
              <span className="checklist__name">
                Единообразное написание и форматирование кода в HTML, файлах
                CSS-препроцессора и JavaScript (включая файлы автоматизации).
              </span>
            </label>
          </div>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default List;
