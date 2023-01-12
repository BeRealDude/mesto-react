import Elements from '../Elements/Elements'
//import { useState } from 'react';


function Main() {
   // const [isOpenPopup, setOpenPopup] = useState();

  function handleEditProfileClick(){
    document.querySelector('.profile-popup').classList.add('popup_opened');
  }

  function handleAddPlaceClick(){
    document.querySelector('.elements-popup').classList.add('popup_opened');
  }

  function handleEditAvatarClick(){
    document.querySelector('.profile-popup-avatar').classList.add('popup_opened');
  }
    return (
        <main className="content">
        <div className="profile">
            <div onClick={handleEditAvatarClick} className="profile__avatar">
                <img className="profile__avatarImg" src="#" alt="" />
                <div className="profile__overlay"></div>
            </div>
            <div className="profile-info">
                <h1 className="profile-info__name">{}</h1>
                <p className="profile-info__activity">{}</p>
                <button onClick={handleEditProfileClick} type="button" className="profile-info__edit-button profile-info__open-popup" />
            </div>
            <button onClick={handleAddPlaceClick} type="button" className="profile__add-button profile__open-popup" />
        </div>
        <section className="cards">
        <ul className="elements">
        <Elements />
        </ul>
    </section>
    </main>
    )
}

export default Main;