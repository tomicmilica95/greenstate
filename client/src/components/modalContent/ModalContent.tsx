import { Field, Form, Formik } from 'formik';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { PriorityEnum, StatusEnum } from '../../enums/enums';

import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { TaskPayload } from '@/types';
import { useNavigate } from 'react-router';
import { taskActions } from '../../redux/reducers/taskReducer';
import { createEditValidation } from './Validation';

export const ModalContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [t] = useTranslation('common');

  const initialValues: TaskPayload = {
    title: '',
    description: '',
    priority: PriorityEnum.High,
    status: StatusEnum.InProgress
  };

  const handleSubmit = (values: TaskPayload) => {
    try {
      dispatch(taskActions.create(values));
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  console.log('baba');
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={createEditValidation}>
        {({ errors, touched }) => (
          <Form>
            <Field
              name='title'
              type='text'
              as={TextField}
              label={t('title')}
              error={touched.title && !!errors.title}
              helperText={touched.title ? errors.title : ''}
            />
            <Field
              name='description'
              as={TextField}
              multiline
              label={t('description')}
              error={touched.description && !!errors.description}
              helperText={touched.description ? errors.description : ''}
            />
            <FormControl fullWidth>
              <InputLabel>{t('priority')}</InputLabel>
              <Field name='priority' as={Select} label={t('priority')} variant='outlined'>
                <MenuItem value={PriorityEnum.Low}>{t('Low')}</MenuItem>
                <MenuItem value={PriorityEnum.Medium}>{t('Medium')}</MenuItem>
                <MenuItem value={PriorityEnum.High}>{t('High')}</MenuItem>
              </Field>
            </FormControl>
            <Button type='submit' variant='contained'>
              {t('createTask')}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
