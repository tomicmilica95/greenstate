import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { taskActions } from '../../redux/reducers/taskReducer';
import { selectors } from '../../redux/selectors/taskSelectors';
import { ModalComponent } from '../../components/modal/Modal';

import { ModalContent } from '../../components/modalContent/ModalContent';
import { useTranslation } from 'react-i18next';
import { Box, Button, Grid } from '@mui/material';
import { TaskComponent } from '../../components/Task';

export const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const tasks = useSelector(selectors.selectAll);
  const [t] = useTranslation('common');

  useEffect(() => {
    dispatch(taskActions.getAllTasks());
  }, []);

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      height={'100vh'}
      gap={5}>
      <Button variant='contained' sx={{ background: '#733CE5' }} onClick={() => setIsOpen(true)}>
        {t('createModal')}
      </Button>
      {tasks.length !== 0 && (
        <Grid container spacing={2} width={'50%'}>
          {tasks.flat().map((task) => {
            return <TaskComponent task={task} key={task.id} />;
          })}
        </Grid>
      )}
      <ModalComponent message={t('createTask')} subtitle={t('subtitle')} isOpen={isOpen}>
        <ModalContent onClose={() => setIsOpen(false)} />
      </ModalComponent>
    </Box>
  );
};
