import React , {useContext} from 'react'
import TaskItem from './TaskItem'
import { TaskContext } from '../App'


function TaskList() {

  const { tasks, deleteTask } = useContext(TaskContext);

  return (
    <>
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} delete={deleteTask} />
      ))}
    </>
  );
}

export default TaskList