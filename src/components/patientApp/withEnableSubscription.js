import ApiService from './ApiService';
import React from 'react';

export default function withEnableSubscription(dataMethod) {
    // wrapper component
    return (WrappedComponent) => class extends React.Component {
        constructor(props) {
            super(props);
            this.onChange = this.onChange.bind(this);
            this.state = {
                data: dataMethod(ApiService, props)
            }
        }
    
        componentDidMount() {
            ApiService.addOnChange(this.onChange);
        }
    
        componentWillUnmount() {
            ApiService.removeOnChange(this.onChange);
        } 

        onChange() {
            console.log('Hey im changed');
            this.setState({
                data: dataMethod(ApiService, this.props)
            });
        }   

        render() {
            return <WrappedComponent data={this.state.data} {...this.props} />
        }
    }
}