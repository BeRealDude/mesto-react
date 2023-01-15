function ProfilePopup() {
    return (
    <section className="popup profile-popup">
        <div className="popup__container">
            <button type="button" className="popup__close" />
            <h2 className="popup__heading">Редактировать профиль</h2>
            <form className="form" name="user" id="user" noValidate>
                <input required minLength="2" maxLength="40" className="popup__text" type="text" name="userName" id="user-name" placeholder="Имя" />
                <span className="form__error user-name-error" id="user-name-error" />
                <input required minLength="2" maxLength="200" className="popup__text" type="text" name="userActivity" id="user-activity" placeholder="О себе" />
                <span className="form__error user-activity-error" id="user-activity-error" />
                <button type="submit" className="form__submit-btn form__profile-btn-save">Сохранить</button>
            </form>
        </div>
    </section>
    )
}

export default ProfilePopup;