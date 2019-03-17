import React from 'react';
import Input from './Input';
import TodoList from './TodoList';

// Data Management, TodoAppComponent or TodoApp
export class TodoAppRedux extends React.Component {
    render() {
        return (
            <div>
                <Input onEnter={this.props.addTodo} />
                <h3>My todos</h3>
                <TodoList todos={this.props.todoApp.todos} removeTodo={this.props.removeTodo} />
            </div>
        );
    }
}
