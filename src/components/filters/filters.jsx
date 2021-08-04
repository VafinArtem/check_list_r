import React from "react";
import {useSelector} from "react-redux";
import {AuthorizationStatus} from "../../consts";
import {changeLoadCardsStatus, setProject} from "../../store/actions";
import {NameSpace} from "../../store/main-reducer";
import Select from "../select/select";

const Filters = () => {
  const projects = useSelector((state) => state[NameSpace.PROJECTS].projects);
  const projectId = useSelector((state) => state[NameSpace.PROJECTS].currenProjectId);
  const projectName = useSelector((state) => state[NameSpace.PROJECTS].currenProjectName);
  const authorizationStatus = useSelector((state) => state[NameSpace.AUTH].authorizationStatus);

  return (
    <React.Fragment>
      {authorizationStatus === AuthorizationStatus.AUTH ? <section className="top__filters filters">
        <h2 className="visually-hidden">Фильтры</h2>
        <div className="filters__form">
          <Select title={`Выберите проект:`}
            currentValue={projectId}
            currentName={projectName}
            items={projects}
            setValue={setProject}
            changeLoadCardsStatus={changeLoadCardsStatus} />
        </div>
      </section> : ``}
    </React.Fragment>
  );
};

export default Filters;
