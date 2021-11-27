import React from 'react';
import './style.css';

export default class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onChange(this.props.name, this.props.id);
  }

  render() {
    return (
      <article class='taskboard__group taskboard__group--basket'>
          <h3 class='taskboard__group-heading taskboard__group-heading--basket'>
            Корзина
          </h3>
          <div class='taskboard__list taskboard__list--trash'>
            <div class='taskboard__item task task--basket task--active'>
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
            <div class='taskboard__item task task--basket'>
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
            <div class='task--empty task task--empty-trash'>
              <p>Корзина пуста</p>
            </div>
          </div>
          <button class='taskboard__button button button--clear' type='button'>
            <svg
              width='22'
              height='22'
              viewBox='0 0 22 22'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                x='15.5374'
                y='5.16638'
                width='1.83333'
                height='14.6667'
                transform='rotate(45 15.5374 5.16638)'
                fill='white'
              />
              <rect
                x='16.8337'
                y='15.5372'
                width='1.83333'
                height='14.6667'
                transform='rotate(135 16.8337 15.5372)'
                fill='white'
              />
            </svg>
            <span>Очистить</span>
          </button>
        </article>
    );
  }
}
