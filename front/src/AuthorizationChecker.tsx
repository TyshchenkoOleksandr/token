import React, { FC } from 'react';

import { UserProvider } from './providers/userProvider/userProvider';

const AuthorizationChecker: FC = ({ children }) => {
  return (
    <>
      <UserProvider>
        {children}
      </UserProvider>
    </>
  );
};

export default AuthorizationChecker;
