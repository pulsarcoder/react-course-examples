import React from 'react';
import logo from '../../../logo.svg';

export default class PatientTile extends React.Component {
    render() {
        const p = this.props.patient;
        return (
            <div className={p.name === this.props.selectedPatient.name ? 'active patient-tile' : 'patient-tile'}>
                <img src={logo} alt="avatar" />
                <div className="patient-info">
                    <h4>{p.name}</h4>
                    <span>{p.age}, {p.gender}</span>
                    <span>{p.roomNo}</span>
                </div>
            </div>
        );
    }
}