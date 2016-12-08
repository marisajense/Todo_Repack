import React from 'react';

const Todo = ({ id, name, complete, deleteTodo, toggleTodo }) => (
  <div className="col s12">
    <div className="col m8">
      <div className="center" style={ complete ? styles.complete : {} }>
        { name }
      </div>
    </div>
    <div className="col m2">
      <input id={`item-${id}`} type="checkbox" defaultChecked={ complete } onClick={ () => toggleTodo(id) } />
      <label htmlFor={`item-${id}`}>Complete ?</label>
    </div>
    <div style={{ cursor: 'pointer' }} className="col m1" onClick={() => deleteTodo(id)}>
      X
    </div>
  </div>
)

let styles = {
  complete: { textDecoration: 'line-through', color: 'grey' }
}

export default Todo;
