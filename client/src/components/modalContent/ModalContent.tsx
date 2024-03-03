import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { PriorityEnum, StatusEnum } from '../../enums';
import { Task, TaskPayload } from '@/types';
import { createEditValidation } from './Validation';
import { taskActions } from '../../redux/reducers/taskReducer';
import { selectors } from '../../redux/selectors/taskSelectors';

interface ModalContentProps {
  task?: Task;
  onClose: () => void;
}

export const ModalContent = ({ task, onClose }: ModalContentProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tasks = useSelector(selectors.selectAll);
  const [t] = useTranslation('common');

  const initialValues: TaskPayload = {
    title: task ? task.title : '',
    description: task ? task.description : '',
    priority: task ? task.priority : PriorityEnum.High,
    status: task ? task.status : StatusEnum.InProgress
  };

  const handleSubmit = (values: TaskPayload) => {
    try {
      if (task) {
        dispatch(taskActions.update({ id: task.id, ...values }));
      } else {
        dispatch(taskActions.create(values));
      }
      navigate('/dashboard');
      onClose();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={createEditValidation}>
        {({ errors, touched }) => (
          <Form>
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
              flexDirection={'column'}
              gap={2}>
              <FormControl fullWidth>
                <Field
                  name='title'
                  type='text'
                  as={TextField}
                  label={t('title')}
                  error={touched.title && !!errors.title}
                  helperText={touched.title ? errors.title : ''}
                />
              </FormControl>
              <FormControl fullWidth>
                <Field
                  name='description'
                  as={TextField}
                  multiline
                  label={t('description')}
                  error={touched.description && !!errors.description}
                  helperText={touched.description ? errors.description : ''}
                />
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>{t('priority')}</InputLabel>
                <Field name='priority' as={Select} label={t('priority')} variant='outlined'>
                  <MenuItem value={PriorityEnum.Low}>{t('Low')}</MenuItem>
                  <MenuItem value={PriorityEnum.Medium}>{t('Medium')}</MenuItem>
                  <MenuItem value={PriorityEnum.High}>{t('High')}</MenuItem>
                </Field>
              </FormControl>
              <FormControl fullWidth>
                <Button type='submit' variant='contained' sx={{ background: '#733CE5' }}>
                  {task ? t('editTask') : t('createTask')}
                </Button>
              </FormControl>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};
