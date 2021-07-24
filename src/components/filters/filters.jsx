import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProjects} from "../../store/api-actions";
import {NameSpace} from "../../store/main-reducer";

const Filters = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state[NameSpace.PROJECTS].projects);
  const isLoaded = useSelector((state) => state[NameSpace.PROJECTS].isLoaded);

  useEffect(() => {
    if (!isLoaded) {
      dispatch(fetchProjects());
    }
  }, [dispatch, isLoaded]);

  return (
    <section className="top__filters filters">
      <h2 className="visually-hidden">Фильтры</h2>
      <form className="filters__form">
        <label className="filters__item">
          <span className="visually-hidden">Проект</span>
          <select name="project" className="filters__input">
            {projects.map(({name, id}) => <option value={id} key={id}>{name}</option>)}
            {/* <option>maffin.pw</option>
            <option>amrita-dent</option> */}
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
