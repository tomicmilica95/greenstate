import { Task } from '@/types';
import { Card, CardContent, Typography, CardActions, IconButton, Box, Chip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from 'react';
import { ModalComponent } from './modal/Modal';
import { ModalContent } from './modalContent/ModalContent';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { taskActions } from '../redux/reducers/taskReducer';

interface TaskProps {
  task: Task;
}

export const TaskComponent = ({ task }: TaskProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [t] = useTranslation('common');
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(taskActions.delete(task.id));
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant='h5' component='div'>
          {task.title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color='text.secondary'>
          {task.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          flexDirection={'row'}
          gap={2}>
          <Typography variant='h6'>{task.priority}</Typography>
          <Chip label={task.status} size='small' />
        </Box>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          flexDirection={'row'}
          gap={2}>
          <IconButton onClick={() => setIsOpen(true)} size='small'>
            <EditIcon />
          </IconButton>
          <IconButton size='small' onClick={handleDelete}>
            <DeleteOutlineIcon />
          </IconButton>
          <ModalComponent message={t('editTask')} subtitle={t('subtitle')} isOpen={isOpen}>
            <ModalContent task={task} onClose={() => setIsOpen(false)} />
          </ModalComponent>
        </Box>
      </CardActions>
    </Card>
  );
};
