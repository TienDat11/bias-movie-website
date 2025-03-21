import { useState } from 'react';

interface TaskInputProps {
  onAddTask: (text: string) => void;
}

export const TaskInput = ({ onAddTask }: TaskInputProps) => {
  const [taskText, setTaskText] = useState<string>('');

  const handleAddTask = () => {
    if (taskText.trim() === '') return;
    onAddTask(taskText);
    setTaskText('');
  };

  return (
    <div className='input-container'>
      <input
        type='text'
        placeholder='Thêm công việc...'
        value={taskText}
        onChange={e => setTaskText(e.target.value)}
      />
      <button onClick={handleAddTask}>➕</button>
    </div>
  );
};
