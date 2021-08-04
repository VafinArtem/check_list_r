import React from "react";
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {fetchCompliteStatus} from "../../store/api-actions";
import {NameSpace} from "../../store/main-reducer";
import {AuthorizationStatus} from "../../consts";
import {changeCompliteStatus} from "../../store/actions";

const CheckboxInput = ({text, id, isComplite}) => {
  const dispatch = useDispatch();

  const authorizationStatus = useSelector((state) => state[NameSpace.AUTH].authorizationStatus);

  return (
    <label className="checklist__box">
      <input
        type="checkbox"
        name={`check-${id}`}
        className="checklist__checkbox visually-hidden"
        defaultChecked={isComplite ? true : false}
        onClick={() => {
          if (authorizationStatus === AuthorizationStatus.AUTH) {
            dispatch(fetchCompliteStatus(id, !isComplite));
          } else {
            dispatch(changeCompliteStatus(id, !isComplite));
          }
        }}
      />
      <span className="checklist__check-box" />
      <span className="checklist__name">
        {text}
      </span>
    </label>
  );
};

CheckboxInput.propTypes = {
  id: PropTypes.number.isRequired,
  isComplite: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default CheckboxInput;
