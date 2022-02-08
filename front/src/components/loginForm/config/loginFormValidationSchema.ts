import * as Yup from 'yup';

export const loginFormValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(1, 'min length 1 symbol').required('Required'),
});
