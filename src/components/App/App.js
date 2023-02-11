import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer'
//import ProfilePopup from '../Popups/ProfilePopup';
//import ProfilePopupAvatar from '../Popups/ProfilePopupAvatar';
//import ElementsPopup from '../Popups/ElementsPopup';
//import DeletePopup from '../Popups/DeletePopup';
//import PopupImg from '../Popups/PopupImg';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
//import Elements from '../Elements/Elements';
import ImagePopup from '../ImagePopup/ImagePopup';
import { api } from "../../utils/Api";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import EditProfilePopup from '../EditProfilePopup/EditProfilePopup';
import EditAvatarPopup from '../EditAvatarPopup/EditAvatarPopup';


function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    Promise.all([api.getInfo(), api.getCards()])
      .then(([info, data]) => {
        setCurrentUser(info);
        setCards(data);
        // setUserName(info.name);
        // setUserDescription(info.about);
        // setUserAvatar(info.avatar);
        // setCards(data);
      })
      .catch((err) => {
        console.log("Ошибка", err);
      });
  }, []);

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

  function handleCardClick(data) {
    setSelectedCard(data)
  }

  

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setDeletePopupOpen(false);
    setSelectedCard({});
    
  }

  function handleCardLike(data) {
    const isLiked = data.likes.some(i => i._id === currentUser._id);
    console.log(isLiked)
    api.addLike(data._id, !isLiked)
    .then((data) => {
        setCards((state) => state.map((c) => c._id === data._id ? data : c));
    });
    
} 

function handleCardDelete(data) {
  console.log('Удаление карточки')
  api.dltCard(data._id)
  .then(() => {
    setCards((state) => state.filter((c) => c._id !== data._id))
});
}

function handleUpdateUser(info) {
  //console.log('info', info)
  api.editInfo(info)
  .then((info) => {
    setCurrentUser(info);
    closeAllPopups();
  })
  .catch((err) => {
    console.log(`${err}`);
  })
}

function handleUpdateAvatar(info){
api.editAvatar(info)
.then((info) => {
  setCurrentUser(info);
  closeAllPopups();
})
}

  return (
    <>
      <Header />
      
      <CurrentUserContext.Provider value={currentUser}>
      <Main 
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      onDeletePopup={handleDeletePopupClick}
      onCardClick={handleCardClick}
      cards={cards}
      onCardLike={handleCardLike}
      onCardDelete={handleCardDelete}
      />

      <Footer />

      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
      {/* <PopupWithForm 
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
        </PopupWithForm> */}

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

      {/* <PopupWithForm 
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
      </PopupWithForm> */}

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
      
      <ImagePopup 
      data={selectedCard}
      onClose={closeAllPopups}
      />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;