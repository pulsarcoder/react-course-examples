import React from 'react';

export default class Input extends React.Component {
    handleKeyPress(event) {
        const value = event.target.value;
        const keyCode = event.charCode || event.keyCode;
        if (keyCode === 13) {
            this.props.onEnter(value);
            event.target.value = '';
        }
    }

    render() {
        return (
            <div>
                <input type="text" onKeyPress={(e) => this.handleKeyPress(e)} />
            </div>
        );
    }
}