import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      taskData: [
        { task: 'test', id: 1234, completed: true },
        { task: 'finish building ToDo App', id: 1, completed: false },
        { task: 'cook dinner', id: 2, completed: false },
        { task: 'clean kitchen', id: 3, completed: false },
        { task: 'reward yourself and buy a nintendo switch', id: 4, completed: false }],
      task: ''
    }
  }

  handleChange = (e) => {
    this.setState({ task: e.target.value });
  }

  handleAddTask = (e) => {
    e.preventDefault();
    let tempArray = this.state.taskData;
    if (this.state.task != "")
      tempArray.push({ task: this.state.task, id: Date.now(), completed: false });
    this.setState({ taskData: tempArray, task: '' });

  }

  handleClickComplete = (id) => {
    let tempArray = [...this.state.taskData];
    tempArray.map(x => {
      if (x.id === id) {
        x.completed = true;
        return x
      } else return x;
    });
    this.setState({ taskData: tempArray });
  }

  clearCompleted = (e) => {
    e.preventDefault();
    let tempArray = [...this.state.taskData];
    tempArray = tempArray.filter(x => {
      return x.completed === false
    })
    this.setState({ taskData: tempArray });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList taskData={this.state.taskData} handleTaskClick={this.handleTaskClick} handleClickComplete={this.handleClickComplete} />
        <TodoForm task={this.state.task} handleChange={this.handleChange} handleAddTask={this.handleAddTask} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
