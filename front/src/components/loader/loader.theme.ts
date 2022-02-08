import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';

const useStylesLoader = makeStyles(() => ({
  loaderWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: alpha('#000', 0.5),
  },
}));

export default useStylesLoader;
