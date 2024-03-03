import { useState } from 'react';
import { PriorityEnum, StatusEnum } from '../enums/enums';
import { taskActions } from '../redux/reducers/taskReducer';
import { useDispatch } from 'react-redux';

export const Task = () => {
  const dispatch = useDispatch();
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    priority: PriorityEnum.Low, // Replace with your default priority value
    status: StatusEnum.Done // Replace with your default status value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Now you can use taskData to dispatch the action or perform other actions
    dispatch(taskActions.create(taskData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type='text' name='title' value={taskData.title} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea name='description' value={taskData.description} onChange={handleChange} />
      </label>
      <label>
        Priority:
        <select name='priority' value={taskData.priority} onChange={handleChange}>
          {/* Options for priority values */}
        </select>
      </label>
      <label>
        Status:
        <select name='status' value={taskData.status} onChange={handleChange}>
          {/* Options for status values */}
        </select>
      </label>
      <button type='submit'>Create Task</button>
    </form>
  );
};
