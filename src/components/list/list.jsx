import React from "react";
import PropTypes from 'prop-types';
import {useSelector} from "react-redux";
import Card from "../card/card";
import NewCard from "../new-card/new-card";
import {CARDS_PROP} from "../../utils/validate";
import {NameSpace} from "../../store/main-reducer";
import {ListTypes} from "../../consts";

const List = ({title, cards}) => {
  const isAddCard = useSelector((state) => state[NameSpace.CARDS].isAddCard);

  return (
    <React.Fragment>
      <h3 className="checklist__subtitle">{title}</h3>
      <ul className="checklist__list">
        {isAddCard && title === ListTypes.IN_PROCESS ? <NewCard /> : ``}
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
