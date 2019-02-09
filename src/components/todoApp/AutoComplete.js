import React from 'react';

export default class AutoComplete extends React.Component {
    handleKeyPress(event) {
        this.props.onChange(event.target.value);
    }

    render() {
        return (
            <div>
                <input type="text" onKeyPress={(e) => this.handleKeyPress(e)} />
            </div>
        );
    }
}