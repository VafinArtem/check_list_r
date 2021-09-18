import classNames from "classnames";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import PropTypes from 'prop-types';
import {changeAuthTab} from "../../store/actions";
import {NameSpace} from "../../store/main-reducer";

const Tab = ({title, type}) => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state[NameSpace.AUTH].activeTab);

  return (
    <div className="login__tab-wrapper">
      <button className={classNames(`login__tab`, {
        [`login__tab--active`]: activeTab === type
      })} onClick={() => {
        dispatch(changeAuthTab(type));
      }}>{title}</button>
    </div>
  );
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Tab;
