function ImagePopup() {
    return (
    <section className="popup popup_bg popup-img">
        <div className="popup__container popup__container_imgCont">
            <button type="button" className="popup__close" />
            <img className="popup__image" src="#" alt="Карача" />
            <h2 class="popup__alt">{}</h2>
        </div>
    </section>
    )
}

export default ImagePopup;