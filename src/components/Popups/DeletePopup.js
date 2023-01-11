function DeletePopup() {
    return (
        <section className="popup delete-popup">
        <div className="popup__container popup__container_dltCont">
            <button type="button" className="popup__close" />
            <h2 className="popup__heading">Вы уверены?</h2>
            <form className="form" noValidate>
            <button type="submit" className="form__submit-btn">Да</button>
        </form>
            </div>
    </section>
    )
}

export default DeletePopup;