import React from 'react';
import { v4 } from 'uuid';

import Home from './home/Home';
import UsersList from '../usersList/UsersList';

export const routsConfig = [
  {
    id: v4(),
    route: '/',
    routeComponent: <Home />,
  },
  {
    id: v4(),
    route: '/users',
    routeComponent: <UsersList />,
  },
];
