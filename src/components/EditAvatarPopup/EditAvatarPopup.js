import PopupWithForm from "../PopupWithForm/PopupWithForm";
import {  useState, useRef } from 'react';

function EditAvatarPopup(props) {
    const { isOpen, onClose } = props;
    const avatarRef = useRef();
    const [avatar, setAvatar] = useState('');

    function handleChangeAvatar(e) {
        setAvatar(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
      
        props.onUpdateAvatar({
          avatar: avatarRef.current.value,
        });
      } 

    return(
<PopupWithForm 
      data={{
        classSelector: 'profile-popup-avatar',
        title: 'Обновить аватар',
        user: 'formAvatar',
        submit: 'Сохранить'
      }}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      >
        <input value={avatar} ref={avatarRef} onChange={handleChangeAvatar} required className="popup__text" type="url" name="userAvatar" id="userAvatar" placeholder="Ссылка на картинку" />
        <span className="form__error userAvatar-error" id="userAvatar-error" />
      </PopupWithForm>
    )
}

export default EditAvatarPopup;