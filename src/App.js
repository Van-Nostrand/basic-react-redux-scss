import React from "react";
import "./scss/main.scss";
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

export default function App() {

  const store = configureStore();

  return(
    <Provider store={store}>
      <TodoForm />
      <TodoList />
    </Provider>
  )
}