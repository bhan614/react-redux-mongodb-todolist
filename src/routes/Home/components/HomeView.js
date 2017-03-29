import React, { PropTypes } from 'react';
import './HomeView.scss';
import TodoList from './todo-list';

class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showTooltip: false };
  }

  componentDidMount() {
     this.props.refreshTodo();
  }

  handleSubmit(e) {
    e.preventDefault();

    let month = new Date().getMonth() + 1;
    let date = new Date().getDate();

    const newItem={
      content: this.refs.content.value,
      date: month + "-" + date,
      id: this.props.todoList.length + 1,
    };
    this.props.addTodo(newItem);
  }

  onDeleteItem(id) {
    const postId = {
      id: id
    };
    this.props.deleteItem(postId);
  }

  render() {
    return (
      <div className="todo-container">
        <h2 className="header">Todo List</h2>
        <form className="todoForm" ref="todoForm" onSubmit={ this.handleSubmit.bind(this) }>
          <input ref="content" type="text" placeholder="Type content here..." className="todoContent" />
          { this.state.showTooltip ?
            <span className="tooltip">Content is required !</span> : null
          }
        </form>
        <TodoList todoList={this.props.todoList} onDeleteItem={this.onDeleteItem.bind(this)} />
      </div>
    )
  }
}



export default HomeView
