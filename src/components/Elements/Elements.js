function Elements() {
    return (
        <template className="template">
        <li className="elements__item">
            <button type="button" className="elements__button-delete" />
            <img className="elements__maskGroup elements__popup-img" src="#" alt="Карача" />
            <div className="elements__wrapper">
                <h2 className="elements__title">{}</h2>
                <button type="button" className="elements__button-like" />
                <span className="elements__quantity-like" />
            </div>
        </li>
    </template>
    )
}

export default Elements;