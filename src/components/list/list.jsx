import React from "react";
import Card from "../card/card";

const List = ({ title, cards }) => {
  return (
    <React.Fragment>
      <h3 className="checklist__subtitle">{title}</h3>
      <ul className="checklist__list">
        {cards.map(({ id, text, isComplite }) => {
          return <Card key={id} id={id} text={text} isComplite={isComplite} />;
        })}
      </ul>
    </React.Fragment>
  );
};

export default List;
