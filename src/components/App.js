import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTaskContainer from '../containers/AddTask';
import TaskListContainer from '../containers/TaskList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <AddTaskContainer />
          <TaskListContainer />
        </div>
      </div>
    );
  }
}

export default App;
