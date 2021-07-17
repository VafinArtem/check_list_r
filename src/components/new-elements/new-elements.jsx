import React from "react";

const NewElements = () => {
  return (
    <section className="top__add-items add-items">
      <h2 className="visually-hidden">Добавление элементов</h2>
      <div className="add-items__item">
        <button className="add-items__button button">
          <svg className="button__icon" width={15} height={12}>
            <use xlinkHref="img/sprite.svg#icon-project" />
          </svg>
          <span className="button__text">Проект</span>
        </button>
        <form action="/" className="add-items__input-box">
          <input type="text" name="new_project" placeholder="Новый проект" />
          <button type="submit" className="add-items__confirm">
            Подтвердить
          </button>
        </form>
      </div>
      <div className="add-items__item">
        <button className="add-items__button button">
          <svg className="button__icon" width={15} height={12}>
            <use xlinkHref="img/sprite.svg#icon-project" />
          </svg>
          <span className="button__text">Категория</span>
        </button>
        <form
          action="/"
          className="add-items__input-box add-items__input-box--showed"
        >
          <input
            type="text"
            className="add-items__input"
            name="new_cathegory"
            placeholder="Новая категория"
          />
          <button
            type="submit"
            className="add-items__confirm"
            aria-label="Подтвердить"
          />
        </form>
      </div>
      <div className="add-items__item">
        <button className="add-items__button button">
          <svg className="button__icon" width={13} height={14}>
            <use xlinkHref="img/sprite.svg#icon-card" />
          </svg>
          <span className="button__text">Карточка</span>
        </button>
      </div>
    </section>
  );
};

export default NewElements;
