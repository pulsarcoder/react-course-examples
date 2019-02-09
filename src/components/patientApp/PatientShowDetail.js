import React from 'react';
import withEnableSubscription from './withEnableSubscription';

class PatientShowDetail extends React.Component {
    render() {
        return (
            <div>
                {this.props.data.name}
            </div>
        );
    }
}

export default withEnableSubscription(
    (ApiService) => ApiService.get()
)(PatientShowDetail);