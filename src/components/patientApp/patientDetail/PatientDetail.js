import React from 'react';
import logo from '../../../logo.svg';
import { AppContext } from '../PatientContext';

export default class PatientDetail extends React.Component {
    static contextType = AppContext;
    render() {
        const patient = this.props.patient;
        return (
            <section className="patient-detail-section">
                <div className="patient-header">
                    <div className="patient-tile">
                        <img src={logo} alt="avatar" />
                        <div className="patient-info">
                            <h4>{patient.name}</h4>
                            <span>{patient.age}, {patient.gender}</span>
                            <span>{patient.roomNo}</span>
                        </div>
                    </div>
                </div>

                <nav className="tabs">
                    <ul className="tab-list">
                        {this.props.tabs.map((t) => <li className={t === 'Opname' ? 'active' : ''}>{t}</li>)}
                    </ul>
                </nav>
                <div className="patient-detail-content">
                    <nav className="tiles">
                        <ul className="tile-list">
                            {this.props.tiles.map((t) => {
                                return (<li>
                                    <div className="tile">
                                        <label>{t.name}</label>
                                        <h3>{t.value}</h3>
                                    </div>
                                </li>);
                            })}
                        </ul>
                    </nav>
                    {this.context.username} 
                    <span style={{color: this.context.theme === 'dark'? '#333' : '#aaa'}}>Testing theme</span>
                </div>
            </section>

        );
    }
}