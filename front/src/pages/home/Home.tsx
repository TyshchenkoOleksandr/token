import React, { FC } from 'react';

import useUser from '../../providers/userProvider/useUser';
import PageWrapper from '../../components/pageWrapper/PageWrapper';

const Home: FC = () => {
  const { user } = useUser();

  return (
    <PageWrapper>
      <p>user email {user.email}</p>

      <p>is activated {user.isActivated.toString()}</p>
    </PageWrapper>
  );
};

export default Home;
