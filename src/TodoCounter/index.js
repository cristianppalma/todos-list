import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
    const {
      completedTodos,
      totalTodos,
    } = React.useContext(TodoContext);

    return (
      <>
      <h1 className='TodoCounterh1'>
        Tus tareas
      </h1>

      {totalTodos === completedTodos && 
      (<h2 className='TodoCounter'>Felicidades, completaste todas las tareas!!</h2>)}
      
      {totalTodos !== completedTodos &&(
      <h2 className='TodoCounter'>
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
      </h2>
      )}
      </>
    );
  }

  export { TodoCounter };
  