import React from "react";
import {useSelector} from "react-redux";
import {changeLoadCardsStatus, setProject} from "../../store/actions";
import {NameSpace} from "../../store/main-reducer";
import Select from "../select/select";

const Filters = () => {
  const projects = useSelector((state) => state[NameSpace.PROJECTS].projects);
  const projectId = useSelector((state) => state[NameSpace.PROJECTS].currenProjectId);
  const projectName = useSelector((state) => state[NameSpace.PROJECTS].currenProjectName);

  return (
    <section className="top__filters filters">
      <h2 className="visually-hidden">Фильтры</h2>
      <div className="filters__form">
        <Select title={`Выберите проект:`}
          currentValue={projectId}
          currentName={projectName}
          items={projects}
          setValue={setProject}
          changeLoadCardsStatus={changeLoadCardsStatus} />
      </div>
    </section>
  );
};

export default Filters;
