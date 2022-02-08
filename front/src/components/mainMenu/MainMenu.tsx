import React, { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import { mainMenuConfig } from './mainMenu.config';
import useStylesMainMenu from './mainMenu.theme';

const MainMenu: FC = () => {
  const classes = useStylesMainMenu();
  const menuItems = mainMenuConfig.map((menuItem): ReactElement => {
    const { title, path } = menuItem;
    return(
      <NavLink
        key={path}
        to={path}
        className={classes.menuItem}
      >
        {title}
      </NavLink>
    );
  });

  return (
    <nav>
      {menuItems}
    </nav>
  );
};

export default MainMenu;
