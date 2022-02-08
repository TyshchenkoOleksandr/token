import React, { FC, ReactElement } from 'react';

import useUser from '../../providers/userProvider/useUser';
import { Loader } from '../loader/Loader';
import UnauthorizedContent from '../unauthorizedContent/UnauthorizedContent';
import Layout from '../layout/Layout';

const ContentSelector: FC = () => {
  const { checkAuthLoading, user } = useUser();

  const renderContent = (): ReactElement => {
    return (
      <>
        {user.isAuth
          ? <Layout />
          : <UnauthorizedContent />
        }
      </>
    );
  };

  return (
    <>
      {checkAuthLoading
        ? <Loader />
        : renderContent()
      }
    </>
  );
};

export default ContentSelector;
