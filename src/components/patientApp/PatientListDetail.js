import React from 'react';
import withEnableSubscription from './withEnableSubscription';
import { withEnableLogger } from './withEnableLogger';
import { connect } from './connect';
import { increment } from './actions';

class PatientListDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicking: true,
            id: 1
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    render() {
        return (
            <div>
                Accessing the id value from connect {this.props.patientId}
                <br />
                <button type="button" onClick={() => this.props.onIncrement()}>Increment</button>
                Total Patients is {this.props.data.length}
                <br />
                Name: {(this.props.data.length > 0) ? this.props.data[0].name : ''}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        patientId: state.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => {
            dispatch(increment());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    withEnableLogger(
        withEnableSubscription(
            (ApiService) => ApiService.getAll()
        )(PatientListDetail)
    )
);