import React from 'react';
import PatientList from './patientList/PatientList';
import PatientDetail from './patientDetail/PatientDetail';

const patients = [
    { name: 'Johnathan hope', age: 30, gender: 'male', roomNo: 'Room1' },
    { name: 'Samantha Andrea William', age: 31, gender: 'female', roomNo: 'Room2' },
    { name: 'Andrea William', age: 31, gender: 'male', roomNo: 'Room2' },
    { name: 'Samanha Andrea', age: 31, gender: 'female', roomNo: 'Room2' },
    { name: 'Hayley William', age: 23, gender: 'female', roomNo: 'Room4' }
];
const tabs = ['General', 'Opname', 'Drugs', 'Medical History'];
const tiles = [
    { name: 'Weight', value: '120 kg' },
    { name: 'Height', value: '164 cm' },
    { name: 'Blood Type', value: 'O +ve' }
];

export default class PatientLanding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {            
            patient: patients[1],
        }
        console.log(this.props);
    }
    onPatientSelect = (patient) => {
        this.setState({ patient });
    }

    render() {
        const patient = this.state.patient;
        return (
            <div className="flex-container">
                <PatientList patients={patients} selectedPatient={patient} onPatientSelect={this.onPatientSelect} />
                <PatientDetail patient={patient} tiles={tiles} tabs={tabs} />
            </div>
        )
    }
}