import React from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { todos: [] }

    this.deleteTodo = this.deleteTodo.bind(this);
    this.add = this.add.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  //We will mainly use componentDidMount
  componentDidMount() {
    $.ajax({
      url: '/api/items',
      type: 'GET'
    }).done( todos => {
      this.setState({ todos });
    });
  }

// add will take in a todo
  add(todo) {
    //            order ----- new todo plus everything else we already had
    this.setState({ todos: [todo, ...this.state.todos] })
  }

  deleteTodo(id) {
    $.ajax({
      url: `/api/items/${id}`,
      type: 'DELETE'
    }).done( () => {
      //                         taking the id passed in, keep everything that doesn't match it, get rid of the id
      this.setState({ todos: this.state.todos.filter( i => i.id !== id) })
    });
  }

  toggleTodo(id) {
    $.ajax({
      url: `/api/items/${id}`,
      type: 'PUT'
    }).done( item => {
      let todos = this.state.todos.map( i => {
        if (i.id === id)
          return item;
        return i;
      });

      this.setState({ todos });
    });
  }

  render() {
    return(
      <div className="container">
        <AddTodo add={this.add} />
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} toggleTodo={this.toggleTodo} />
      </div>
    );
  }
}

export default App;



// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.deleteTodo = this.deleteTodo.bind(this);
//     this.toggleTodo = this.toggleTodo.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.state = { todos: [] }
//   }
//
//   componentDidMount() {
//     $.ajax({
//       url: '/api/items',
//       type: 'GET'
//     }).done( todos => {
//       this.setState({ todos });
//     });
//   }
//
//   handleSubmit(name) {
//     $.ajax({
//       url: '/api/items',
//       type: 'POST',
//       data: { item: { name }}
//     }).done( todo => {
//       this.setState({ todos: [todo, ...this.state.todos] })
//     })
//   }
//
//   toggleTodo(id) {
//     $.ajax({
//       url: `/api/items/${id}`,
//       type: 'PUT'
//     }).done( item => {
//       let todos = this.state.todos.map( i => {
//         if (i.id === id)
//           return item;
//         return i;
//       });
//
//       this.setState({ todos });
//     });
//   }
//
//   deleteTodo(id) {
//     $.ajax({
//       url: `/api/items/${id}`,
//       type: 'DELETE'
//     }).done( () => {
//       this.setState({ todos: this.state.todos.filter( i => i.id !== id) })
//     });
//   }
//
//   render() {
//     return (
//       <div className="container">
//         <AddTodo handleSubmit={this.handleSubmit} />
//         <TodoList
//           todos={this.state.todos}
//           deleteTodo={this.deleteTodo}
//           toggleTodo={this.toggleTodo}
//         />
//       </div>
//     )
//   }
// }
//
// export default App;
