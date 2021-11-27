import React from 'react';
import Backlog from '../Backlog';
import Done from '../Done';
import Processing from '../Processing';
import Basket from '../Basket';

import './style.css';

export default class TaskBoard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onChange(this.props.name, this.props.id);
  }

  render() {
    return (
      <section class='taskboard'>
        <h2 class='visually-hidden'>Ваши задачи:</h2>
        <Backlog />
        <Processing />
        <Done />
        <Basket />
      </section>
    );
  }
}
