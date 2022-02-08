import React, { FC, FormEvent, ReactElement } from 'react';
import { Formik } from 'formik';

import useUser from '../../providers/userProvider/useUser';
import useStylesLoginForm from './loginForm.theme';
import { initialFormikValues } from './loginFormConfig';

const LoginForm: FC = () => {
  const classes = useStylesLoginForm();
  const { login, registration } = useUser();

  const onLoginButtonClick = (email: string, password: string): void => {
    login(email, password);
  };

  const onRegisterButtonClick = (email: string, password: string) => (): void => {
    registration(email, password);
  };

  return (
    <Formik
      initialValues={initialFormikValues}
      onSubmit={(): void => {}}
    >
      {(props): ReactElement => (
        <form className={classes.loginForm} onSubmit={(event: FormEvent<HTMLFormElement>): void => {
          event.preventDefault();
          onLoginButtonClick(props.values.email, props.values.password);
        }}
        >
          <input
            type='text'
            name='email'
            placeholder='Enter your email'
            value={props.values.email}
            onChange={props.handleChange}
            className={classes.loginFormInput}
          />

          <input
            type='password'
            name='password'
            placeholder='Enter your password'
            value={props.values.password}
            onChange={props.handleChange}
            className={classes.loginFormInput}
          />
          <div className={classes.loginFormButtonBox}>
            <button type='submit'>
              login
            </button>

            <button
              type='button'
              onClick={onRegisterButtonClick(props.values.email, props.values.password)}
            >
              register
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
