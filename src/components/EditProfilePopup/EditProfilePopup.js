import { useState, useEffect, useContext } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const { isOpen, onClose } = props;
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

  useEffect(() => {
    if (isOpen) {
      setName(currentUser.name);
      setAbout(currentUser.about);
    }
  }, [currentUser, isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setAbout(e.target.value);
  }

  function handleSubmit(e) {
    console.log("submit", props);
    e.preventDefault();
    props.onUpdateUser({
      name: name,
      about: about,
    });
  }

  return (
    <PopupWithForm
      data={{
        classSelector: "profile-popup",
        title: "Редактировать профиль",
        user: "user",
        submit: "Сохранить",
      }}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      //isOpen={isEditProfilePopupOpen}
      //onClose={closeAllPopups}
    >
      <input
        value={name || ""}
        onChange={handleChangeName}
        required
        minLength="2"
        maxLength="40"
        className="popup__text"
        type="text"
        name="userName"
        id="user-name"
        placeholder="Имя"
      />
      <span className="form__error user-name-error" id="user-name-error" />
      <input
        value={about || ""}
        onChange={handleChangeDescription}
        required
        minLength="2"
        maxLength="200"
        className="popup__text"
        type="text"
        name="userActivity"
        id="user-activity"
        placeholder="О себе"
      />
      <span
        className="form__error user-activity-error"
        id="user-activity-error"
      />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
