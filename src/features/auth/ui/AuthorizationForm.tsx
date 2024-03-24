import { userModel } from '@entities/user';
import { Input, Button } from '@shared/ui';
import { FormEvent } from 'react';

import './style.scss';

type AuthorizationFormProps = {
  closeModal: () => void;
};

export const AuthorizationForm = ({ closeModal }: AuthorizationFormProps) => {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      login: { value: string };
      password: { value: string };
    };

    userModel.fx
      .authFx({
        login: target.login.value,
        password: target.password.value,
      })
      .then(() => closeModal());
  }

  return (
    <div className="authorization_modal">
      <form className="auth-form" onSubmit={handleSubmit}>
        <Button type="button" className="auth-form_closed" onClick={closeModal} title="Закрыть">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" fill="none">
            <path
              fill="#C4C4C4"
              d="M14.703 1.41 13.232 0 7.405 5.59 1.577 0 .107 1.41 5.935 7 .107 12.59 1.577 14l5.828-5.59L13.233 14l1.47-1.41L8.875 7l5.828-5.59Z"
            />
          </svg>
        </Button>
        <h3 className="visually-hidden">Форма входа</h3>
        <Input
          className="auth-form_input"
          type="text"
          name="login"
          maxLength={15}
          minLength={4}
          pattern="^[a-zA-Z0-9]+$"
          id="login"
          placeholder="Login"
          required
        />
        <Input
          className="auth-form_input"
          type="password"
          name="password"
          minLength={6}
          id="password"
          placeholder="Password"
          required
        />
        <Button className="authorization_button button" type="submit">
          Войти
        </Button>
      </form>
    </div>
  );
};

export default AuthorizationForm;
