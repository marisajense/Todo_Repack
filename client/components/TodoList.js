import React from 'react';
import Todo from '../components/Todo';

// "Presentational Component"
const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  //mapping through todos array
  let items = todos.map( todo => {
    //            id for key    everything on the todo list
    return(<Todo deleteTodo={deleteTodo} key={todo.id} {...todo} toggleTodo={toggleTodo} />)
  });

  return(
    <div className="row">
      { items }
    </div>
  )
}

export default TodoList;
