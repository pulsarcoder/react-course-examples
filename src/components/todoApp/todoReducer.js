const initialState = {
    todos: []
};

export const todoReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const { todos } = prevState;
            todos.push(action.payload.todo);
            return Object.assign({}, prevState, {
                todos
            });
        default:
            return { ...prevState };
    }
}