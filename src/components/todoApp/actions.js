// without thunk
// export const addTodo = (todo) => ({ type: 'ADD_TODO', payload: { todo } });

export const addTodoValidated = todo => {
    if (todo) {
        return { type: 'ADD_TODO', payload: { todo }};
    }
}

// export const removeTodo = (index) => ({ type: 'REMOVE_TODO', payload: { index } });

export const getTodos = () => {
    return fetch('http://todoApp/todos')
        .then(data => ({type: 'GET_TODOS', payload: { todos: data.todos}}));
}

// with thunk
export const addTodo = todo => dispatch => {
    if (todo) {
        dispatch({ type: 'ADD_TODO', payload: { todo }});
    }
}

export const removeTodo = (index) => dispatch => {
    dispatch({ type: 'REMOVE_TODO', payload: { index } });
};