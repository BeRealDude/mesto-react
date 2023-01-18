import Elements from "../Elements/Elements";
import { useState, useEffect } from "react";
import { api } from "../../utils/Api";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  useEffect(() => {
    Promise.all([api.getInfo(), api.getCards()])
      .then(([info, data]) => {
        //currentUserId = info._id;
        //profileInfoUsers.setUserInfo(info);
        // data.reverse().forEach((data) => {
        //cards.addItem(createCard(data));
        setUserName(info.name);
        setUserDescription(info.about);
        setUserAvatar(info.avatar);
      }).catch((err) => {
        console.log("Ошибка", err);
      });
  });
  return (
    <main className="content">
      <div className="profile">
        <div onClick={props.onEditAvatar} className="profile__avatar">
          <img className="profile__avatarImg" src={userAvatar} alt="" />
          <div className="profile__overlay"></div>
        </div>
        <div className="profile-info">
          <h1 className="profile-info__name">{userName}</h1>
          <p className="profile-info__activity">{userDescription}</p>
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
          <Elements />
        </ul>
      </section>
    </main>
  );
}

export default Main;
