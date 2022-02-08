import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AxiosClient } from './AxiosClient';
import AuthorizationChecker from './AuthorizationChecker';
import Layout from './components/contentSelector/ContentSelector';

function App(): ReactElement {

  return (
    <AxiosClient>
      <BrowserRouter>
        <AuthorizationChecker>
          <Layout />
        </AuthorizationChecker>
      </BrowserRouter>
    </AxiosClient>
  );
}

export default App;
