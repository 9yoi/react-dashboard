import React, { Component } from 'react';
import './App.css';
import mockData from './data.js';

console.log(mockData);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Team Forecast</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
