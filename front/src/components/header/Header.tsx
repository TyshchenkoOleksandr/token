import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import useUser from '../../providers/userProvider/useUser';

const Header: FC = () => {
  const { logout } = useUser();

  return (
    <header>
      <NavLink to='/'>
        home
      </NavLink>
      <NavLink to='/users'>
        users
      </NavLink>
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
