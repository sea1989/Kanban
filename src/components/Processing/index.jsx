import React from 'react';
import './style.css';

export default class Processing extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onChange(this.props.name, this.props.id);
  }

  render() {
    return (
      <article class='taskboard__group taskboard__group--processing'>
        <h3 class='taskboard__group-heading taskboard__group-heading--processing'>
          В процессе
        </h3>
        <div class='taskboard__list taskboard__list--sorted'>
          <div class='taskboard__item task task--empty'>
            <p>Перетащите карточку</p>
          </div>
          <div class='taskboard__item task task--processing task--active'>
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
          <div class='taskboard__item task task--processing'>
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
          <div class='taskboard__item task task--processing'>
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
        <div class='taskboard__item task task--processing'>
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
      </article>
    );
  }
}
