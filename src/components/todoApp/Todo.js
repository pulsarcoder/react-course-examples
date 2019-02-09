import React from 'react';

export default class Todo extends React.Component {
    render() {
        return (
            <li onClick={(e) => this.props.onClick(e, this.props.idx)}>{this.props.text}</li>
        );
    }
}