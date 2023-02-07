import Card from "../Card/Card";
//import { useState, useEffect } from "react";
//import { api } from "../../utils/Api";
import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function Main(props) {
  // const [userName, setUserName] = useState("");
  // const [userDescription, setUserDescription] = useState("");
  // const [userAvatar, setUserAvatar] = useState("");
  // const [cards, setCards] = useState([]);

  // useEffect(() => {
  //   Promise.all([api.getInfo(), api.getCards()])
  //     .then(([info, data]) => {
  //       setUserName(info.name);
  //       setUserDescription(info.about);
  //       setUserAvatar(info.avatar);
  //       setCards(data);
  //     })
  //     .catch((err) => {
  //       console.log("Ошибка", err);
  //     });
  // }, []);
  
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <div className="profile">
        <div onClick={props.onEditAvatar} className="profile__avatar">
          <img className="profile__avatarImg" src={currentUser.avatar} alt="" />
          <div className="profile__overlay"></div>
        </div>
        <div className="profile-info">
          <h1 className="profile-info__name">{currentUser.name}</h1>
          <p className="profile-info__activity">{currentUser.about}</p>
          <button
            onClick={props.onEditProfile}
            type="button"
            className="profile-info__edit-button profile-info__open-popup"
          />
        </div>
        <button
          onClick={props.onAddPlace}
          type="button"
          className="profile__add-button profile__open-popup"
        />
      </div>
      <section className="cards">
        <ul className="elements">
          {props.cards.map((data) => (
            <Card key={data._id} data={data} popup={props} handleLikeClick={props} handleDeleteClick={props}/>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
