import { useState } from 'react';
import './styles/index.css'
import './styles/postit.css'
import trash from "./assets/trash2.png"
import plus from "./assets/plus.png"
import listgif from "./assets/list.gif"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1, 
      titulo: "Lavar los trastes",
      descripcion: "Lavar los platos y los vasos"
    },
    {
      id: 2, 
      titulo: "Pasear al perro",
      descripcion: "Pasear al perro a las 2pm"
    },
    {
      id: 3, 
      titulo: "Trapear",
      descripcion: "Trapear despues de pasear al perro"
    },
    {
      id: 4, 
      titulo: "Leer el libro",
      descripcion: "Leer el capitulo 4"
    },
  ]);

  const [inputTask, setInputTask] = useState("");

  
  const addTask = () => {
    if (inputTask.trim() === "") return; 

    const newTask = {
      id: Date.now(),
      titulo: inputTask,
      descripcion: "Nueva tarea pendiente"
    };

    setTasks([...tasks, newTask]);
    setInputTask(""); 
  };

  
  const deleteTask = (idToDelete) => {
    const updatedTasks = tasks.filter((task) => task.id !== idToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div className='nota_postit' style={{ padding: '20px' }}>
      <h2 className='title'>
      <img className='gif-icon' src={listgif}/>
        To Do List
      </h2>
      
      <ul>
        {tasks.map((taskItem) => (
          <li key={taskItem.id} style={{ marginBottom: '15px' }}>
            <div className='text' style={{ display: 'flex', flexDirection: 'column', gap: '4px'}}>
              <strong>{taskItem.titulo}</strong> {taskItem.descripcion}{' '}
            </div>
              <button className='btnEliminar' onClick={() => deleteTask(taskItem.id)}>
                <img className='btn-icon' src={trash}/>
                Eliminar
              </button>
          </li>
        ))}
      </ul>
      <div className='taskInput' style={{ marginTop: '15px' }}>
        <input
          type="text" 
          placeholder='Proxima tarea' 
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
        />
          <button className='btnAnotar' onClick={addTask}>
            <img className='btn-icon' src={plus}/>
            Anotar
            </button>
        </div>
    </div>
    
  );
}

export default App;