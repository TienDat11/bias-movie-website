import { Task } from '../types/Task';

interface TaskItemProps {
  task: Task;
  onUpdateTask: (id: number, status: Task['status']) => void;
  onDeleteTask: (id: number) => void;
}

export const TaskItem = ({
  task,
  onUpdateTask,
  onDeleteTask,
}: TaskItemProps) => {
  return (
    <li className={`task-item ${task.status}`}>
      <span>{task.text}</span>
      <div className='actions'>
        <input
          type='checkbox'
          checked={task.status === 'done'}
          onChange={() =>
            onUpdateTask(task.id, task.status === 'done' ? 'doing' : 'done')
          }
        />
        <button className='delete-btn' onClick={() => onDeleteTask(task.id)}>
          ❌
        </button>
      </div>
    </li>
  );
};
