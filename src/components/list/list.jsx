import React, {useMemo} from "react";
import PropTypes from 'prop-types';
import {useSelector} from "react-redux";
import Card from "../card/card";
import NewCard from "../new-card/new-card";
import {CARDS_PROP} from "../../utils/validate";
import {NameSpace} from "../../store/main-reducer";
import {ListTypes} from "../../consts";
import classNames from "classnames";

const List = ({title, cards}) => {
  const memoCards = useMemo(() => cards, [cards]);

  let isAddCard = false;
  if (title === ListTypes.IN_PROCESS) {
    isAddCard = useSelector((state) => state[NameSpace.CARDS].isAddCard);
  }

  return (
    <div className="checklist__container">
      <h3 className={classNames(`checklist__subtitle`, {
        [`checklist__subtitle--in-process`]: title === ListTypes.IN_PROCESS,
        [`checklist__subtitle--ready`]: title === ListTypes.IS_READY,
      })}>{title}</h3>
      <ul className="checklist__list">
        {isAddCard && title === ListTypes.IN_PROCESS ? <NewCard /> : ``}
        {memoCards.map(({id, text, isComplite}) => {
          return <Card key={id} id={id} text={text} isComplite={isComplite} />;
        })}
      </ul>
    </div>
  );
};

List.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape(CARDS_PROP).isRequired).isRequired
};

export default List;
