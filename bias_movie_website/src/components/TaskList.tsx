import { Task } from '../types/Task';
import { TaskItem } from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  onUpdateStatus: (id: number, status: Task['status']) => void;
  onDeleteTask: (id: number) => void;
}

export const TaskList = ({
  tasks,
  onUpdateStatus,
  onDeleteTask,
}: TaskListProps) => {
  return (
    <ul className='task-list'>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdateTask={onUpdateStatus}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
};
