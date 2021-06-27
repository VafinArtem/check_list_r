const Main = () => {
  return (
    <main className="main">
      <h1 className="visually-hidden">Чек-лист</h1>
      <header className="main__top top">
        <h2 className="visually-hidden">Фильтры</h2>
        <section className="top__filters filters">
          <form className="filters__form">
            <label className="filters__item">
              <span className="visually-hidden">Проект</span>
              <select name="project" className="filters__input">
                <option checked>Выберите проект</option>
                <option>maffin.pw</option>
                <option>amrita-dent</option>
              </select>
            </label>
            <label className="filters__item">
              <span className="visually-hidden">Категория</span>
              <select name="project" className="filters__input">
                <option checked>Выберите категорию</option>
              </select>
            </label>
            <label className="filters__item">
              <span className="visually-hidden">Фильтр по выполнению</span>
              <select name="project" className="filters__input">
                <option checked>Показать все</option>
                <option>Выполненные</option>
                <option>Не выполненные</option>
              </select>
            </label>
          </form>
        </section>
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
            <form action="/" className="add-items__input-box add-items__input-box--showed">
              <input type="text" className="add-items__input" name="new_cathegory" placeholder="Новая категория" />
              <button type="submit" className="add-items__confirm" aria-label="Подтвердить" />
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
      </header>
      <section className="main__checklist checklist">
        <h2 className="checklist__title visually-hidden">Проект: maffin.pw</h2>
        <h3 className="checklist__subtitle">В процессе:</h3>
        <ul className="checklist__list">
          <li className="checklist__item">
            <div className="checklist__inner">
              <div className="checklist__controls">
                <button className="checklist__control checklist__control--edit" aria-label="Редактировать" />
                <button className="checklist__control checklist__control--delete" aria-label="Удалить" />
              </div>
              <label className="checklist__box">
                <input type="checkbox" name="check-1" className="checklist__checkbox visually-hidden" />
                <span className="checklist__check-box" />
                <span className="checklist__name">Документ проходит проверку на валидность https://validator.w3.org/nu/</span>
              </label>
            </div>
          </li>
          <li className="checklist__item">
            <div className="checklist__inner checklist__inner--showed">
              <div className="checklist__controls">
                <button className="checklist__control checklist__control--edit" aria-label="Редактировать" />
                <button className="checklist__control checklist__control--delete" aria-label="Удалить" />
              </div>
              <label className="checklist__box">
                <input type="checkbox" name="check-2" className="checklist__checkbox visually-hidden" />
                <span className="checklist__check-box" />
                <span className="checklist__name">В разметке отсутствует дублирование кода для одного и того же элемента, с помощью которого элемент отображается в разных местах страницы на разных версиях: мобильной, десктопной, планшетной</span>
              </label>
              <button className="checklist__show-button checklist__show-button--showed" aria-label="Скрыть" />
            </div>
          </li>
          <li className="checklist__item">
            <div className="checklist__inner">
              <div className="checklist__controls">
                <button className="checklist__control checklist__control--save" aria-label="Сохранить" />
                <button className="checklist__control checklist__control--delete" aria-label="Удалить" />
              </div>
              <label className="checklist__box checklist__box--edit">
                <span className="visually-hidden">Редактировать текст</span>
                <textarea name="card_text" className="checklist__edit" defaultValue={"Подключены правильные шрифты, их размеры, цвет и толщина равны соответствующим параметрам в макетах и техническом задании."} />
              </label>
            </div>
          </li>
          <li className="checklist__item">
            <div className="checklist__inner">
              <div className="checklist__controls">
                <button className="checklist__control checklist__control--edit" aria-label="Редактировать" />
                <button className="checklist__control checklist__control--delete" aria-label="Удалить" />
              </div>
              <label className="checklist__box">
                <input type="checkbox" name="check-4" className="checklist__checkbox visually-hidden" />
                <span className="checklist__check-box" />
                <span className="checklist__name">Единообразное написание и форматирование кода в HTML, файлах CSS-препроцессора и JavaScript (включая файлы автоматизации).</span>
              </label>
            </div>
          </li>
        </ul>
        <h3 className="checklist__subtitle">Готово:</h3>
        <ul className="checklist__list">
          <li className="checklist__item checklist__item--complite">
            <div className="checklist__inner checklist__inner--complite">
              <div className="checklist__controls">
                <button className="checklist__control checklist__control--edit" aria-label="Редактировать" />
                <button className="checklist__control checklist__control--delete" aria-label="Удалить" />
              </div>
              <label className="checklist__box">
                <input type="checkbox" name="check-5" className="checklist__checkbox visually-hidden" defaultChecked />
                <span className="checklist__check-box" />
                <span className="checklist__name">Документ проходит проверку на валидность https://validator.w3.org/nu/</span>
              </label>
            </div>
          </li>
          <li className="checklist__item checklist__item--complite">
            <div className="checklist__inner checklist__inner--complite">
              <div className="checklist__controls">
                <button className="checklist__control checklist__control--edit" aria-label="Редактировать" />
                <button className="checklist__control checklist__control--delete" aria-label="Удалить" />
              </div>
              <label className="checklist__box">
                <input type="checkbox" name="check-6" className="checklist__checkbox visually-hidden" defaultChecked />
                <span className="checklist__check-box" />
                <span className="checklist__name">
                  В разметке есть правильный вьюпорт тег
                  <code>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  </code>
                </span>
              </label>
            </div>
          </li>
          <li className="checklist__item checklist__item--complite">
            <div className="checklist__inner checklist__inner--complite">
              <div className="checklist__controls">
                <button className="checklist__control checklist__control--edit" aria-label="Редактировать" />
                <button className="checklist__control checklist__control--delete" aria-label="Удалить" />
              </div>
              <label className="checklist__box">
                <input type="checkbox" name="check-7" className="checklist__checkbox visually-hidden" defaultChecked />
                <span className="checklist__check-box" />
                <span className="checklist__name">Для блока, у которого есть фоновое изображение, прописан фоновый цвет, который соответствует преобладающему...</span>
              </label>
              <button className="checklist__show-button" aria-label="Показать весь текст" />
            </div>
          </li>
          <li className="checklist__item checklist__item--complite">
            <div className="checklist__inner checklist__inner--complite">
              <div className="checklist__controls">
                <button className="checklist__control checklist__control--edit" aria-label="Редактировать" />
                <button className="checklist__control checklist__control--delete" aria-label="Удалить" />
              </div>
              <label className="checklist__box">
                <input type="checkbox" name="check-8" className="checklist__checkbox visually-hidden" defaultChecked />
                <span className="checklist__check-box" />
                <span className="checklist__name">Критическая функциональность сайта работоспособна без JavaScript (использовано прогрессивное улучшение).</span>
              </label>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Main;
