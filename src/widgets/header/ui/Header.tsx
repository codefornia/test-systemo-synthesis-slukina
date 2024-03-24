import { formatter } from '@shared/libs';
import { useState } from 'react';
import { Button } from '@shared/ui';
import { userModel } from '@entities/user';
import { AuthorizationForm } from '@features/auth';
import './style.scss';

export const Header = () => {
  const userIsAuth = userModel.selectors.useIsUserAuth();
  const user = userModel.selectors.useUser();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <header className="header">
      <h1 className="header_title">Test Game</h1>
      {userIsAuth && !!user ? (
        <p> {`${formatter.formatNumberWithSpaces(user.balance)} (${user.currency})`}</p>
      ) : (
        <div className="header_auth-bar">
          <Button type="button" className="header_auth-button button" onClick={openModal}>
            Вход
          </Button>
          <Button type="button" className="header_auth-button button">
            Регистрация
          </Button>
          {modalIsOpen && (
            <div className="authorization_container">
              <AuthorizationForm closeModal={closeModal} />
            </div>
          )}
        </div>
      )}
    </header>
  );
};
