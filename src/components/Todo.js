import React from 'react';

export default function Todo(props) {

  return (
    <li className='todo-entry'>
      <p>{props.todo.text}</p>
      <div>{props.todo.created}</div>
    </li>
  )
}