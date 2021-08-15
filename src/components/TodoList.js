import React from 'react';
import Todo from './Todo';
import { useShallowEqualSelector } from '../hooks/useShallowEqualSelector';

export default function TodoList() {
  const todos = useShallowEqualSelector(state => state.todos);

  const allTodos = todos.map((todo, i) => {
    return <Todo key={`todo${i}`} todo={todo} />
  })

  return (
    <div className="todo-list-wrapper">
      <ul className="todo-list">
        {allTodos}
      </ul>
    </div>
  )
}