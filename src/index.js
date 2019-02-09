import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import PatientApp from './components/patientApp/PatientApp';
// import ShoppingCartApp from './components/shoppingCart/ShoppingCartApp';

ReactDOM.render(<PatientApp title="Shopping Component" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
