function ImagePopup(props) {
  const { data, onClose } = props;

  return (
    <section
      className={`popup popup_bg popup-img ${
        Object.keys(data).length !== 0 && "popup_opened"
      }`}
    >
      <div className="popup__container popup__container_imgCont">
        <button type="button" className="popup__close" onClick={onClose} />
        <img className="popup__image" src={data.link} alt={data.name} />
        <h2 className="popup__alt">{data.name}</h2>
      </div>
    </section>
  );
}

export default ImagePopup;
