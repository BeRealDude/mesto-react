import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer'
import ProfilePopup from '../Popups/ProfilePopup';
import ProfilePopupAvatar from '../Popups/ProfilePopupAvatar';
import ElementsPopup from '../Popups/ElementsPopup';
import DeletePopup from '../Popups/DeletePopup';
import PopupImg from '../Popups/PopupImg'

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />

      <ProfilePopup />
      <ProfilePopupAvatar />
      <ElementsPopup />
      <DeletePopup />
      <PopupImg />
    </>
  );
}

export default App;