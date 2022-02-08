import React, { FC } from 'react';
import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';

import useStylesLoader from './loader.theme';

export const Loader: FC = () => {
  const classes = useStylesLoader();

  return (
    <Box className={classes.loaderWrapper}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
