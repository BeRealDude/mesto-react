function Card(props) {
    const { data, popup } = props;
    
    // function handleClick() {
    //     props.onCardClick(props.data);
    //   }  

    return (
        <li className="elements__item">
            <button onClick={popup.onDeletePopup} type="button" className="elements__button-delete" />
            <img className="elements__maskGroup elements__popup-img" src={data.link} alt={data.name} onClick={() => popup.onCardClick(data)} />
            <div className="elements__wrapper">
                <h2 className="elements__title">{data.name}</h2>
                <button type="button" className="elements__button-like" />
                <span className="elements__quantity-like">{data.likes.length}</span>
            </div>
        </li>
    )
}

export default Card;