import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Arithmetic }  from './pages/Exporter';
// import {ellapse} from './pages/Arith';
// import {display} from './pages/Display';
// import TodoAppContainer from './components/todoApp/TodoAppContainer';
import {CustomApp} from './pages/ExampleEventHandling';
import PatientApp from './components/patientApp/PatientApp';

class App extends Component {
  buttonClick = () => {
    console.log('button clicked');
  }

  render() {
    return (
      <PatientApp />
    );
  }
}

export default App;
