import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import classNames from 'classnames';

const SelectItem = ({name, value, currentValue, setCurrentItem, setValue, setShowList}) => {
  const dispatch = useDispatch();

  return (
    <li className={classNames(`select__item`, {
      [`select__item--active`]: value === currentValue
    })} tabIndex={0} data-value={value} onClick={() => {
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
