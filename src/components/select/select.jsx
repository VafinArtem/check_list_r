import React, {useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import SelectItem from '../select-item/select-item';
import PropTypes from 'prop-types';

const Select = ({title, currentValue, currentName, items, changeLoadCardsStatus, setValue}) => {
  const dispatch = useDispatch();

  const selectRef = useRef();

  const [showList, setShowList] = useState(false);
  const [currentItem, setCurrentItem] = useState(currentName);

  useEffect(() => {
    setCurrentItem(currentName);
  }, [currentName]);


  useEffect(() => {
    dispatch(changeLoadCardsStatus());
  }, [currentItem]);

  useEffect(() => {
    const onClick = (evt) => {
      if (!selectRef.current.contains(evt.target)) {
        setShowList(false);
      }
    };
    document.addEventListener(`click`, onClick);
    return () => document.removeEventListener(`click`, onClick);
  }, []);

  return (
    <div className="item__select select" ref={selectRef}>
      <h3 className="select__title">{title}</h3>
      <div className="select__wrapper">
        <div className="select__inner">
          <p className="select__input" aria-label="Выберите проект" tabIndex={0} onClick={() => setShowList(!showList)}>{currentItem}</p>
          <ul className={`select__list ${showList ? `show` : ``}`}>
            {items.map(
                ({name, id}) =>
                  <SelectItem
                    key={id}
                    value={id}
                    name={name}
                    currentValue={currentValue}
                    setCurrentItem={setCurrentItem}
                    setValue={setValue}
                    setShowList={setShowList}
                  />
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

Select.propTypes = {
  items: PropTypes.array.isRequired,
  currentValue: PropTypes.number,
  currentName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  changeLoadCardsStatus: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default Select;
