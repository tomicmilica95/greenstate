import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { taskActions } from '../../redux/reducers/taskReducer';
import { selectors } from '../../redux/selectors/taskSelectors';
import { ModalComponent } from '../../components/modal/Modal';

import { ModalContent } from '../../components/modalContent/ModalContent';
import { useTranslation } from 'react-i18next';
import { Box, Button } from '@mui/material';
import { Task } from '../../components/Task';

export const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const tasks = useSelector(selectors.selectAll);
  const [t] = useTranslation('common');
  //const oneTask = useSelector(selectors.selectById('1'));
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('id');
  useEffect(() => {
    dispatch(taskActions.getAllTasks());
  }, []);
  console.log(tasks);
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      height={'100vh'}
      gap={5}>
      {tasks.length === 0 ? (
        <Button variant='contained' sx={{ background: '#733CE5' }} onClick={() => setIsOpen(true)}>
          Create Modal
        </Button>
      ) : (
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          height={'100vh'}
          gap={5}>
          {tasks.flat().map((task) => {
            return <Task task={task} key={task.id} />;
          })}
        </Box>
      )}
      <ModalComponent message={t('createTask')} subtitle={t('subtitle')} isOpen={isOpen}>
        {
          <div>
            <ModalContent />
          </div>
        }
      </ModalComponent>
    </Box>
  );
};
