import React, { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer'
//import ProfilePopup from '../Popups/ProfilePopup';
//import ProfilePopupAvatar from '../Popups/ProfilePopupAvatar';
//import ElementsPopup from '../Popups/ElementsPopup';
//import DeletePopup from '../Popups/DeletePopup';
import PopupImg from '../Popups/PopupImg';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
//import Elements from '../Elements/Elements';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);

  function handleEditProfileClick(){
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick(){
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick(){
    setEditAvatarPopupOpen(true);
  }

  function handleDeletePopupClick(){
    setDeletePopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setDeletePopupOpen(false);
  }

  return (
    <>
      <Header />
      <Main 
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      onDeletePopup={handleDeletePopupClick}
      />

      

      <Footer />

      <PopupWithForm 
      data={{
        classSelector: 'profile-popup',
        title: 'Редактировать профиль',
        user: 'user',
        submit: 'Сохранить'
      }}

      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
      >
        <input required minLength="2" maxLength="40" className="popup__text" type="text" name="userName" id="user-name" placeholder="Имя" />
        <span className="form__error user-name-error" id="user-name-error" />
        <input required minLength="2" maxLength="200" className="popup__text" type="text" name="userActivity" id="user-activity" placeholder="О себе" />
        <span className="form__error user-activity-error" id="user-activity-error" />
        </PopupWithForm>

        <PopupWithForm 
      data={{
        classSelector: 'elements-popup',
        title: 'Новое место',
        user: 'formCard',
        submit: 'Создать'
      }}
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
      >
        <input required minLength="2" maxLength="30" className="popup__text" type="text" name="name" id="formCard-title" placeholder="Название" />
                <span className="form__error formCard-title-error" id="formCard-title-error" />
                <input required className="popup__text" type="url" name="link" id="formCard-place" placeholder="Ссылка на картинку" />
                <span className="form__error formCard-place-error" id="formCard-place-error" />
      </PopupWithForm>

      <PopupWithForm 
      data={{
        classSelector: 'profile-popup-avatar',
        title: 'Обновить аватар',
        user: 'formAvatar',
        submit: 'Сохранить'
      }}
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
      >
        <input required className="popup__text" type="url" name="userAvatar" id="userAvatar" placeholder="Ссылка на картинку" />
        <span className="form__error userAvatar-error" id="userAvatar-error" />
      </PopupWithForm>

      <PopupWithForm 
      data={{
        classSelector: 'delete-popup',
        title: 'Вы уверены?',
        user: 'formDelete',
        submit: 'Да'
      }}
      isOpen={isDeletePopupOpen}
      onClose={closeAllPopups}
      />

      
      
      
      
      <PopupImg />
    </>
  );
}

export default App;