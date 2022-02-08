import React, { FC } from 'react';

import useStylesPageWrapper from './pageWrapper.theme';

const PageWrapper: FC = ({ children }) => {
  const classes = useStylesPageWrapper();

  return (
    <div className={classes.pageWrapper}>
      {children}
    </div>
  );
};

export default PageWrapper;
