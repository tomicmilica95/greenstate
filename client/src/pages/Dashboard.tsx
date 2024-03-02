import { useState } from 'react';
import { TaskModal } from './TaskModal';

export const Dashboard = () => {
  const [isModalOpen, setModalOpen] = useState(false);

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
