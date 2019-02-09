import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Arithmetic }  from './pages/Exporter';
// import {ellapse} from './pages/Arith';
// import {display} from './pages/Display';

class App extends Component {
  render() {
    const arith = new Arithmetic(2,3);
    arith.display(arith.add());
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
