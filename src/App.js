import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
   BrowserRoute
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">I.E.M Departamental</h1>
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    ); 
  }
}

export default App;
6