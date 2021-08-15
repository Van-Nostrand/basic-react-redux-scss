
export const addTodo = (todo) => {
  return dispatch => dispatch({type: 'ADD_TODO', payload: todo})
}

export const deleteTodo = (id) => {
  return dispatch => dispatch({type: 'DELETE_TODO', id})
}

export const setInputText = (val) => {
  return dispatch => dispatch({type: 'CHANGE_INPUT_TEXT', val});
}
