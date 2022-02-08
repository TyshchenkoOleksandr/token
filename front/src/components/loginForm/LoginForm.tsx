import React, { FC, FormEvent, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { Formik } from 'formik';

import useUser from '../../providers/userProvider/useUser';
import useStylesLoginForm from './loginForm.theme';
import { initialFormikValues } from './loginFormConfig';
import { loginFormValidationSchema } from './config/loginFormValidationSchema';

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
      validationSchema={loginFormValidationSchema}
    >
      {(props): ReactElement => (
        <form className={classes.loginForm} onSubmit={(event: FormEvent<HTMLFormElement>): void => {
          event.preventDefault();
          if (!props.errors.email && !props.errors.password && !props.touched.email && !props.touched.password) {
            onLoginButtonClick(props.values.email, props.values.password);
          }
        }}
        >
          <TextField
            name='email'
            error={!!props.errors.email}
            label={props.errors.email}
            value={props.values.email}
            placeholder='Enter your email'
            fullWidth={true}
            sx={{ display: 'block', width: '250px',  margin: '15px auto' }}
            onChange={props.handleChange}
          />

          <TextField
            name='password'
            type='password'
            error={!!props.errors.password}
            label={props.errors.password}
            value={props.values.password}
            placeholder='Enter your password'
            fullWidth={true}
            sx={{ display: 'block', width: '250px',  margin: '15px auto' }}
            onChange={props.handleChange}
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
