function ProfilePopupAvatar() {
    return (
        <section className="popup profile-popup-avatar">
        <div className="popup__container">
            <button type="button" className="popup__close" />
            <h2 className="popup__heading popup__heading_avatar">Обновить аватар</h2>
            <form className="form" name="formAvatar" id="formAvatar" noValidate>
                <input required className="popup__text" type="url" name="userAvatar" id="userAvatar" placeholder="Ссылка на картинку" />
                <span className="form__error userAvatar-error" id="userAvatar-error" />
                <button type="submit" className="form__submit-btn form__profile-btn-save">Сохранить</button>
            </form>
        </div>
    </section>
    )
}

export default ProfilePopupAvatar;