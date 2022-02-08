import { useContext } from 'react';

import { UserContext } from './userProvider';

// TODO: add type
const useUser = (): any => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};

export default useUser;
