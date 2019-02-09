import React from 'react';
// import Todo from './Todo';

export default class TodoList extends React.Component {
    removeTodo(idx) {
        this.props.removeTodo(idx);
    }

    render() {
        // const Todo = (text, idx) => <li onClick={(e) => this.removeTodo(idx)}>{this.props.text}</li>;
        return (
            <div>
                <ul>
                    {this.props.todos.map((t, idx) => <li key={idx} onClick={(e) => this.removeTodo(idx)}>{t}</li>)}
                </ul>
            </div>
        );
    }
}