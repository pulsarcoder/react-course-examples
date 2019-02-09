import React from 'react';
import PatientTile from './PatientTile';

export default class PatientList extends React.Component {
    render() {
        return (
            <section className="patient-list-section">
                <h4>Patient List</h4>
                <div className="search-box">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="patient-list-block">
                    <ul className="patient-list">
                        {this.props.patients.map((p) => {
                            return (<li onClick={() => this.props.onPatientSelect(p)}>
                                <PatientTile patient={p} selectedPatient={this.props.selectedPatient} />
                            </li>)
                        })}
                    </ul>
                </div>
            </section>
        );
    }
}