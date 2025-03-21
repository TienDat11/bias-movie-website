import { useEffect, useState } from 'react';
import { Task } from '../types/Task';
import { TaskInput } from '../components/TaskInput';
import { TaskList } from '../components/TaskList';
import './TodoListPage.css';

export const TodoListPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const saveTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(saveTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text: string): void => {
    const newTask: Task = {
      id: Date.now(),
      text: text,
      status: 'todo',
    };
    setTasks([...tasks, newTask]);
  };

  const updateStatus = (id: number, status: Task['status']): void => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, status } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id: number): void => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className='container'>
      <h1>📝 To-Do List</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onUpdateStatus={updateStatus}
        onDeleteTask={deleteTask}
      />
    </div>
  );
};
