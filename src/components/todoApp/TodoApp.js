import React from 'react';
import Input from './Input';
import TodoList from './TodoList';

// Data Management

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.todos = [];
    }

    addTodo = (todo) => {
        console.log(todo);
        const todos = this.state.todos;
        todos.push(todo);
        this.todos = todos;
        this.setState({ todos });        
    }

    removeTodo = (idx) => {
        const todos = this.state.todos;
        todos.splice(idx, 1);
        this.todos = todos;
        this.setState({ todos });
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if (nextProps.filterText !== this.props.filterText) {
            let todos = this.todos;
            todos = todos.filter((todo) => todo.startsWith(nextProps.filterText));
            this.setState({ todos });
        }
    }

    render() {
        return (
            <div>
                <Input onEnter={this.addTodo} />
                <h3>My todos</h3>
                <TodoList todos={this.state.todos} removeTodo={this.removeTodo} />
            </div>
        )
    }
}