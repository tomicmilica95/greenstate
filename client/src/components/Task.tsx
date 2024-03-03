import { TaskPayload } from '@/types';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  IconButton,
  Box,
  Chip
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
export const Task = ({ task }: { task: TaskPayload }) => {
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
          <IconButton size='small'>
            <EditIcon />
          </IconButton>
          <IconButton size='small'>
            <DeleteOutlineIcon />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
};
