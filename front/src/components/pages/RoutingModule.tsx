import React, { FC } from 'react';
import { Route, Routes, Navigate } from 'react-router';

import { routsConfig } from './routsConfig';

const RoutingModule: FC = () => {
  const routes = routsConfig
  .map(currentRoute => {
    const { id, route, routeComponent } = currentRoute;

    return (
      <Route
        key={id}
        path={route}
        element={routeComponent}
      />
    );
  });

  return (
    <Routes>
      {routes}

      <Route
        path='*'
        element={<Navigate to='/' />}
      />
    </Routes>
  );
};

export default RoutingModule;
