import { makeStyles } from '@mui/styles';

const useStylesLoginForm = makeStyles(() => ({
  loginForm: {
    width: '300px',
    height: '200px',
    border: '1px solid black',
    borderRadius: '10px',
  },
  loginFormInput: {
    display: 'block',
    width: '250px',
    margin: '20px auto',
  },
  loginFormButtonBox: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));

export default useStylesLoginForm;
