import React, { FC } from 'react';

import useUser from '../../providers/userProvider/useUser';
import useStylesHeader from './header.theme';
import MainMenu from '../mainMenu/MainMenu';

const Header: FC = () => {
  const classes = useStylesHeader();
  const { logout } = useUser();

  return (
    <header className={classes.header}>
      <MainMenu />

      <button
        type='button'
        onClick={logout}
      >
        logout
      </button>
    </header>
  );
};

export default Header;
