import React from 'react';
import TaskBoardGroup from '../Taskboard-group';

import './style.css';

export default class TaskBoard extends React.Component {
  constructor(props) {
    super(props);

    this.Status = {
      BACKLOG: `backlog`,
      PROCESSING: `processing`,
      DONE: `done`,
      BASKET: `basket`,
    };

    this.StatusLabel = {
      backlog: `Бэклог`,
      processing: `В процессе`,
      done: `Готово`,
      basket: `Корзина`,
    };

    this._title = this.StatusLabel[this.Status];

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onChange(this.props.name, this.props.id);
  }

  render() {
    return (
      <section class='taskboard'>
        <h2 class='visually-hidden'>Ваши задачи:</h2>
        {Object.values(this.Status).map((element) => {
          return (
            <TaskBoardGroup
              classStatus={element}
              title={this.StatusLabel[element]}
            />
          );
        })}
      </section>
    );
  }
}
