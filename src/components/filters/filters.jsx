import React, {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeLoadCardsStatus, setProject} from "../../store/actions";
import {NameSpace} from "../../store/main-reducer";

const Filters = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state[NameSpace.PROJECTS].projects);
  const projectId = useSelector((state) => state[NameSpace.PROJECTS].currenProjectId);
  const projectRef = useRef();

  return (
    <section className="top__filters filters">
      <h2 className="visually-hidden">Фильтры</h2>
      <form className="filters__form">
        <label className="filters__item">
          <span className="visually-hidden">Проект</span>
          <select
            name="project"
            className="filters__input"
            ref={projectRef}
            value={projectId}
            onChange={() => {
              dispatch(setProject(projectRef.current.value));
              dispatch(changeLoadCardsStatus());
            }}>
            {projects.map(({name, id}) => <option value={id} key={id}>{name}</option>)}
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
