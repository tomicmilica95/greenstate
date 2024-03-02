import { Task } from '@/types';
import { useState } from 'react';
import { createPortal } from 'react-dom';

export type ModalProp = {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  task: Task;
};

export const TaskModal = ({ isOpen, onClose, onSave, task }: ModalProp) => {
  const portalContainer = document.getElementById('portal');

  const [title, setTitle] = useState(task ? task.title : '');

  const handleSave = () => {
    //  onSave({ title });
    onClose();
  };

  const modalContent = (
    <div className={`modal ${isOpen ? 'is-active' : ''}`}>
      <div className='modal-background' onClick={onClose}></div>
      <div className='modal-content'>
        {/* Modal content goes here */}
        <input
          type='text'
          placeholder='Task Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
      </div>
      <button className='modal-close is-large' aria-label='close' onClick={onClose}></button>
    </div>
  );

  return createPortal(modalContent, portalContainer);
};
