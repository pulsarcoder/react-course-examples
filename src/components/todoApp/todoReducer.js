const initialState = {
    todos: []
};

export const todoReducer = (state = initialState, action) => {
    let { todos } = state;
    switch (action.type) {
        case 'ADD_TODO':
            todos.push(action.payload.todo);
            return { todos };
        case 'REMOVE_TODO':
            todos.splice(action.payload.index, 1);
            return { todos };
        default:
            return {...state};
    }
}