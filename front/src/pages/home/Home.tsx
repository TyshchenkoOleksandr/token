import React, { FC } from 'react';

import useUser from '../../providers/userProvider/useUser';

const Home: FC = () => {
  const { user } = useUser();

  return (
    <div>
      <p>user email {user.email}</p>

      <p>is activated {user.isActivated.toString()}</p>
    </div>
  );
};

export default Home;
