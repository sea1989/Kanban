import React from 'react';
import './style.css';

export default class TaskBoardGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
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
          <div class='taskboard__item task task--active'>
            <div class='task__body'>
              <p class='task__view'>Название первой задачи</p>
              <input
                class='task__input'
                type='text'
                value='Название первой задачи'
              />
            </div>
            <button
              class='task__edit'
              type='button'
              aria-label='Изменить'
            ></button>
          </div>
          <div class='taskboard__item task'>
            <div class='task__body'>
              <p class='task__view'>Название первой задачи</p>
              <input
                class='task__input'
                type='text'
                value='Название первой задачи'
              />
            </div>
            <button
              class='task__edit'
              type='button'
              aria-label='Изменить'
            ></button>
          </div>
          <div class='taskboard__item task'>
            <div class='task__body'>
              <p class='task__view'>Название первой задачи</p>
              <input
                class='task__input'
                type='text'
                value='Название первой задачи'
              />
            </div>
            <button
              class='task__edit'
              type='button'
              aria-label='Изменить'
            ></button>
          </div>
          <div class='taskboard__item task'>
            <div class='task__body'>
              <p class='task__view'>Название первой задачи</p>
              <input
                class='task__input'
                type='text'
                value='Название первой задачи'
              />
            </div>
            <button
              class='task__edit'
              type='button'
              aria-label='Изменить'
            ></button>
          </div>
          <div class='taskboard__item task'>
            <div class='task__body'>
              <p class='task__view'>Название первой задачи</p>
              <input
                class='task__input'
                type='text'
                value='Название первой задачи'
              />
            </div>
            <button
              class='task__edit'
              type='button'
              aria-label='Изменить'
            ></button>
          </div>
        </div>
      </article>
    );
  }
}
