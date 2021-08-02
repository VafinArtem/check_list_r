import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

const SelectItem = ({name, value, currentValue, setCurrentItem, setValue, setShowList}) => {
  const dispatch = useDispatch();

  return (
    <li className={`select__item ${value === currentValue ? `select__item--active` : ``}`} tabIndex={0} data-value={value} onClick={() => {
      if (value !== currentValue) {
        dispatch(setValue(value));
        setCurrentItem(name);
      }
      setShowList(false);
    }}>{name}</li>
  );
};

SelectItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  currentValue: PropTypes.number.isRequired,
  setCurrentItem: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  setShowList: PropTypes.func.isRequired,
};

export default SelectItem;
