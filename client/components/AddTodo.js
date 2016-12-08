import React from 'react';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // reference the item (see input in render())
    let item = this.refs.item;
    $.ajax({
      url: '/api/items',
      type: 'POST',
      data: { item: { name: item.value }}
    }).done( todo => {
      // props because we are getting data. props for add - see add on main (render and function)
      this.props.add(todo);
      item.value = null;
    }).fail(msg => {
      // Do something
    });
  }

  render() {
    return(
      <div className="center">
        <form onSubmit={this.handleSubmit}>
          <label>Add Item</label>
          <input ref="item" />
        </form>
      </div>
    );
  }
}

export default AddTodo;



// const AddTodo = ({ handleSubmit }) => {
//   let name;
//   return (
//     <div className="center">
//       <form onSubmit={ e => {
//         e.preventDefault();
//         handleSubmit(name.value)
//       }}>
//         <label>Add Item</label>
//         <input ref={ n => name = n } />
//       </form>
//     </div>
//   )
// }
//
// export default AddTodo;
