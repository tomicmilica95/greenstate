import { useEffect, useState } from 'react';
import { TaskModal } from './TaskModal';
import { useDispatch, useSelector } from 'react-redux';
import { taskActions } from '../redux/reducers/taskReducer';
import { selectors } from '../redux/selectors/taskSelectors';

export const Dashboard = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const tasks = useSelector(selectors.selectAll);
  //const oneTask = useSelector(selectors.selectById('1'));

  useEffect(() => {
    dispatch(taskActions.getAllTasks());
  }, []);

  const handleCreateTask = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSaveTask = (taskData) => {
    console.log('Saving task:', taskData);
  };

  return (
    <div>
      <button onClick={handleCreateTask}>Create Task</button>

      {/* Render the TaskModal */}
      {isModalOpen && (
        <TaskModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSave={handleSaveTask}
          task={null}
        />
      )}
    </div>
  );
};
