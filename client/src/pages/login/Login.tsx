import { useTranslation } from 'react-i18next';

import { Form, Formik, Field } from 'formik';

import { validationSchema } from './Validation';
import { UserPayload } from '@/types';
import { userActions } from '../../redux/reducers/userReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './styles.css';
import { Logo } from '../../assets';
import { Box } from '@mui/system';

export const Login = () => {
  const [t] = useTranslation('common');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues: UserPayload = {
    email: '',
    password: ''
  };

  const handleSubmit = (values: UserPayload) => {
    try {
      dispatch(userActions.login(values));
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      height={'100vh'}
      gap={5}>
      <Logo />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        {({ errors, touched }) => (
          <Form className='loginForm'>
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              flexDirection={'column'}
              gap={3}>
              <Field
                as={TextField}
                variant='outlined'
                id='email'
                name='email'
                label={t('email')}
                error={!!errors.email && touched.email}
                helperText={touched.email ? errors.email : ''}
              />
              <Field
                as={TextField}
                variant='outlined'
                type={'password'}
                id='password'
                name='password'
                label={t('password')}
                error={!!errors.password && touched.password}
                helperText={touched.password ? errors.password : ''}
              />
              <Button type='submit' variant='contained'>
                {t('login')}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
