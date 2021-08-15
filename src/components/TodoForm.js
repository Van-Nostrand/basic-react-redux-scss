import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useShallowEqualSelector } from '../hooks/useShallowEqualSelector';
import { addTodo, setInputText } from '../store/actions';

export default function TodoForm(props) {
  const inputText = useShallowEqualSelector(state => state.inputText);
  const dispatch = useDispatch();

  const generateUniqueId = () => {
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let newTodo = {
      text: inputText,
      created: new Date().getTime(),
      id: generateUniqueId()
    }
    dispatch(addTodo(newTodo));
  }

  const handleChange = (e) => {
    dispatch(setInputText(e.target.value));
  }

  return (
    <div className='input-wrapper'>
      <form onSubmit={handleSubmit}>
        <input type='text' value={inputText} onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}