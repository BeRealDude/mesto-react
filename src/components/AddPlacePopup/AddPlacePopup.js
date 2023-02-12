import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useState, useEffect } from "react";

function AddPlacePopup(props) {
  const { isOpen, onClose } = props;

  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    if (isOpen) {
      setName("");
      setLink("");
    }
  }, [isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: name,
      link: link,
    });
  }

  return (
    <PopupWithForm
      data={{
        classSelector: "elements-popup",
        title: "Новое место",
        user: "formCard",
        submit: "Создать",
      }}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        value={name || ""}
        onChange={handleChangeName}
        required
        minLength="2"
        maxLength="30"
        className="popup__text"
        type="text"
        name="name"
        id="formCard-title"
        placeholder="Название"
      />
      <span
        className="form__error formCard-title-error"
        id="formCard-title-error"
      />
      <input
        value={link || ""}
        onChange={handleChangeLink}
        required
        className="popup__text"
        type="url"
        name="link"
        id="formCard-place"
        placeholder="Ссылка на картинку"
      />
      <span
        className="form__error formCard-place-error"
        id="formCard-place-error"
      />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
