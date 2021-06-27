import { MAX_SYMBOLS } from "../../consts";
import { limitDescription } from "../../utils/common";

const CheckboxInput = ({ text, fullComment, id, isComplite }) => {
  return (
    <label className="checklist__box">
      <input
        type="checkbox"
        name={`check-${id}`}
        className="checklist__checkbox visually-hidden"
        defaultChecked={isComplite ? true : false}
      />
      <span className="checklist__check-box" />
      <span className="checklist__name">
        {fullComment ? text : limitDescription(text, MAX_SYMBOLS)}
      </span>
    </label>
  );
};

export default CheckboxInput;
