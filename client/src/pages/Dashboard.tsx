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
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('id');
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
      {tasks.length === 0 ? (
        <button onClick={handleCreateTask}>Create Task</button>
      ) : (
        <div>
          {tasks.flat().map((task) => {
            console.log('Current Task:', task);

            return (
              <div key={task.id}>
                <p>Title: {task.title}</p>
                <p>Description: {task.description}</p>
                <p>Priority: {task.priority}</p>
                <p>Status: {task.status}</p>
              </div>
            );
          })}
        </div>
      )}

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
