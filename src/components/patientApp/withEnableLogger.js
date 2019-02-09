import React from 'react';

export function withEnableLogger(WrapperComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            console.log('Hey im called');
        }

        render() {
            console.log('Hey im rendering...');
            return <WrapperComponent {...this.props} />
        }
    }
}