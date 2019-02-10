import React from 'react';
import Input from './Input';
import TodoList from './TodoList';

// Data Management
export class TodoAppRedux extends React.Component {
    // removeTodo = (idx) => {
    //     const todos = this.state.todos;
    //     todos.splice(idx, 1);
    //     this.setState({ todos });
    // }
    componentDidMount() {
        let { store } = this.context;
        store.getState();
    }

    render() {
        return (
            <div>
                <Input onEnter={this.props.addTodo} />
                <h3>My todos</h3>
                <TodoList todos={this.props.todos} removeTodo={this.props.removeTodo} />
            </div>
        )
    }
}