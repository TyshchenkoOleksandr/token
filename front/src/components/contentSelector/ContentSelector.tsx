import React, { FC, ReactElement } from 'react';

import useUser from '../../providers/userProvider/useUser';
import { Loader } from '../loader/Loader';
import Layout from '../layout/Layout';
import UnauthorizedContent from '../../pages/unauthorizedContent/UnauthorizedContent';


const ContentSelector: FC = () => {
  const { checkAuthLoading, user, isFirstLoading } = useUser();

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
      {checkAuthLoading || isFirstLoading
        ? <Loader />
        : renderContent()
      }
    </>
  );
};

export default ContentSelector;
