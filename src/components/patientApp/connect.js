import React from 'react'
import { Store, customReducer } from './reducers';

export function connect(mapStateToProps, mapDisptachToProps) {
    return (WrapperComponent) => class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                id: 1
            }
            this.store = new Store(customReducer, (nextState) => {
                this.setState({...nextState});
            });
        }

        render() {
            return (<WrapperComponent {...this.props} {...mapDisptachToProps(this.store.dispatch) } {...mapStateToProps(this.state)} />)
        }
    }
}