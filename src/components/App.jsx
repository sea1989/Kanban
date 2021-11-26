import React from 'react';
import AddTask from './Add-task';

import './style.css';
import TaskBoard from './Task-board';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AddTask />
        <TaskBoard />
      </React.Fragment>
    );
  }
}
