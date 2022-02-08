import { makeStyles } from '@mui/styles';

const useStylesMainMenu = makeStyles(() => ({
  menuItem: {
    '&:not(:last-child)': {
      marginRight: '10px',
    },
  },
}));

export default useStylesMainMenu;
