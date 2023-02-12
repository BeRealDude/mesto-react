import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Card(props) {
  const { data, popup, handleLikeClick, handleDeleteClick } = props;

  const currentUser = useContext(CurrentUserContext);
  const isOwn = data.owner._id === currentUser._id;
  const isLiked = data.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `elements__button-like ${
    isLiked && "button-like_active"
  }`;

  //   Открытие попа удаления onClick={popup.onDeletePopup}
  return (
    <li className="elements__item">
      {isOwn && (
        <button
          onClick={() => handleDeleteClick.onCardDelete(data)}
          type="button"
          className="elements__button-delete"
        />
      )}
      <img
        className="elements__maskGroup elements__popup-img"
        src={data.link}
        alt={data.name}
        onClick={() => popup.onCardClick(data)}
      />
      <div className="elements__wrapper">
        <h2 className="elements__title">{data.name}</h2>
        <button
          type="button"
          className={cardLikeButtonClassName}
          onClick={() => handleLikeClick.onCardLike(data)}
        />
        <span className="elements__quantity-like">{data.likes.length}</span>
      </div>
    </li>
  );
}

export default Card;
