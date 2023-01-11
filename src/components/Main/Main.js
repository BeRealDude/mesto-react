import Elements from '../Elements/Elements'

function Main() {
    return (
        <main className="content">
        <div className="profile">
            <div className="profile__avatar">
                <img className="profile__avatarImg" src="#" alt="" />
                <div className="profile__overlay"></div>
            </div>
            <div className="profile-info">
                <h1 className="profile-info__name">{}</h1>
                <p className="profile-info__activity">{}</p>
                <button type="button" className="profile-info__edit-button profile-info__open-popup" />
            </div>
            <button type="button" className="profile__add-button profile__open-popup" />
        </div>
        <section className="cards">
        <ul className="elements">
        <Elements />
        </ul>
    </section>
    </main>
    )
}

export default Main;