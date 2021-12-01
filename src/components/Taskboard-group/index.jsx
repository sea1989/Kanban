import React from 'react';
import TaskComponent from '../Task-component';
import { tasks } from '../data';

import './style.css';

export default class TaskBoardGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this._tasks = tasks;
  }

  handleClick() {
    this.props.onChange(this.props.name, this.props.id);
  }

  render() {
    return (
      <article
        className={`taskboard__group taskboard__group--${this.props.classStatus}`}
      >
        <h3
          className={`taskboard__group-heading taskboard__group-heading--${this.props.classStatus}`}
        >
          {this.props.title}
        </h3>
        <div class='taskboard__list'>
          {this._tasks
            .filter((task) => task.status === this.props.classStatus)
            .map((element) => {
              return (
                <TaskComponent
                  classStatus={element.status}
                  title={element.title}
                />
              );
            })}
        </div>
      </article>
    );
  }
}
