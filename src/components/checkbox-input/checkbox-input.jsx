import { useDispatch } from "react-redux";
import { MAX_SYMBOLS } from "../../consts";
import { limitDescription } from "../../utils/common";
import { fetchCompliteStatus } from "../../store/api-actions";

const CheckboxInput = ({ text, fullComment, id, isComplite }) => {
  const dispatch = useDispatch();

  return (
    <label className="checklist__box">
      <input
        type="checkbox"
        name={`check-${id}`}
        className="checklist__checkbox visually-hidden"
        defaultChecked={isComplite ? true : false}
        onClick={() => dispatch(fetchCompliteStatus(id, !isComplite))}
      />
      <span className="checklist__check-box" />
      <span className="checklist__name">
        {fullComment ? text : limitDescription(text, MAX_SYMBOLS)}
      </span>
    </label>
  );
};

export default CheckboxInput;
