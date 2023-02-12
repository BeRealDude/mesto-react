function PopupWithForm({ data, ...props }) {
  const { onSubmit } = props;
  return (
    <section
      className={`popup popup_type_${data.classSelector} ${
        props.isOpen && "popup_opened"
      }`}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          onClick={props.onClose}
        />
        <h2 className="popup__heading">{data.title}</h2>
        <form className="form" name={data.user} id="user" onSubmit={onSubmit}>
          {props.children}
          <button
            type="submit"
            className="form__submit-btn form__profile-btn-save"
          >
            {data.submit}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
