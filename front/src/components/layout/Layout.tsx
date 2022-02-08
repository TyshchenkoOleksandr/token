import React, { FC } from 'react';

import RoutingModule from '../../pages/RoutingModule';
import Header from '../header/Header';

const Layout: FC = () => {
  return (
    <>
      <Header />

      <RoutingModule />
    </>
  );
};

export default Layout;
