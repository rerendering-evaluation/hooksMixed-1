import { useRef } from "react";
import { memo } from "react";
import React, { useState } from 'react';
import TaskList from './TaskList';
export const TaskContext = React.createContext();
const App = memo(() => {
  const [tasks, setTasks] = useState([]);
  const newTaskText = useRef('');
  const handleAddTask = () => {
    if (newTaskText.current.value.trim() !== '') {
      setTasks([...tasks, {
        text: newTaskText.current.value,
        completed: false
      }]);
      newTaskText.current.value = '';
    }
  };
  const handleNewTaskTextChange = event => {
    newTaskText.current.value = event.target.value;
  };
  return <TaskContext.Provider value={{
    tasks,
    setTasks
  }}>
      <div>
        <h1>Lista de tareas</h1>
        <div>
          <input type="text" ref={newTaskText} id="taskText" />
          <button onClick={handleAddTask}>Agregar tarea</button>
        </div>
        <TaskList />
      </div>
    </TaskContext.Provider>;
});
export default App;