import React, { FC } from 'react';

import LoginForm from '../loginForm/LoginForm';
import useStylesUnauthorizedContent from './unauthorizedContent.theme';

const UnauthorizedContent: FC = () => {
  const classes = useStylesUnauthorizedContent();

  return (
    <div className={classes.unauthorizedContent}>
      <LoginForm />
    </div>
  );
};

export default UnauthorizedContent;
