const Filters = () => {
  return (
    <section className="top__filters filters">
      <h2 className="visually-hidden">Фильтры</h2>
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
  );
};

export default Filters;
