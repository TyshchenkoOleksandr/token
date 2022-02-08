import React, { ChangeEvent, FC, useState, MouseEvent } from 'react';

import useUser from '../../providers/userProvider/useUser';
import useStylesLoginForm from './loginForm.theme';

const LoginForm: FC = () => {
  const classes = useStylesLoginForm();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {
    login,
    registration,
  } = useUser();

  const changeLogin = (event: ChangeEvent<HTMLInputElement>): void => {
    const newValue = event.target.value;
    setEmail(newValue);
  };

  const changePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    const newValue = event.target.value;
    setPassword(newValue);
  };

  const onLoginButtonClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();

    login(email, password);
  };

  const onRegisterButtonClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();

    registration(email, password);
  };

  return (
    <form className={classes.loginForm}>
      <input
        type='text'
        placeholder='Enter your email'
        value={email}
        onChange={changeLogin}
        className={classes.loginFormInput}
      />

      <input
        type='password'
        placeholder='Enter your password'
        value={password}
        onChange={changePassword}
        className={classes.loginFormInput}
      />
      <div className={classes.loginFormButtonBox}>
        <button
          type='button'
          onClick={onLoginButtonClick}
        >
          login
        </button>

        <button
          type='button'
          onClick={onRegisterButtonClick}
        >
          register
        </button>
      </div>

    </form>
  );
};

export default LoginForm;
