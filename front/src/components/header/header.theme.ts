import { makeStyles } from '@mui/styles';

const useStylesHeader = makeStyles(() => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '800px',
    height: '50px',
    margin: '0 auto',
    padding: '0 20px',
    borderBottom: '1px solid black',
  },
}));

export default useStylesHeader;
