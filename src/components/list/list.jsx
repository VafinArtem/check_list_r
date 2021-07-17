import React from "react";
import PropTypes from 'prop-types';
import Card from "../card/card";
import {CARDS_PROP} from "../../utils/validate";

const List = ({title, cards}) => {
  return (
    <React.Fragment>
      <h3 className="checklist__subtitle">{title}</h3>
      <ul className="checklist__list">
        {cards.map(({id, text, isComplite}) => {
          return <Card key={id} id={id} text={text} isComplite={isComplite} />;
        })}
      </ul>
    </React.Fragment>
  );
};

List.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape(CARDS_PROP).isRequired).isRequired
};

export default List;
