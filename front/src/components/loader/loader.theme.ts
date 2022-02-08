import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';

const useStylesLoader = makeStyles(() => ({
  loaderWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: alpha('#000', 0.5),
  },
}));

export default useStylesLoader;
