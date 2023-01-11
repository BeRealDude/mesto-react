function ElementsPopup() {
    return (
    <section className="popup elements-popup">
        <div className="popup__container">
            <button type="button" className="popup__close" id="popup-add-close" />
            <h2 className="popup__heading">Новое место</h2>
            <form className="form" name="formCard" id="formCard" noValidate>
                <input required minLength="2" maxLength="30" className="popup__text" type="text" name="name" id="formCard-title" placeholder="Название" />
                <span className="form__error formCard-title-error" id="formCard-title-error" />
                <input required className="popup__text" type="url" name="link" id="formCard-place" placeholder="Ссылка на картинку" />
                <span className="form__error formCard-place-error" id="formCard-place-error" />
                <button type="submit" className="form__submit-btn">Создать</button>
            </form>
        </div>
    </section>
    )
}

export default ElementsPopup;