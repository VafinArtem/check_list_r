const TextareaInput = ({ text, setUpdatedText }) => {
  return (
    <label className="checklist__box checklist__box--edit">
      <span className="visually-hidden">Редактировать текст</span>
      <textarea
        name="card_text"
        className="checklist__edit"
        defaultValue={text.trim()}
        onInput={(evt) => setUpdatedText(evt.target.value)}
      />
    </label>
  );
};

export default TextareaInput;
