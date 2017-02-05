import React, { Component } from 'react';
import './App.css';
import data from './data.js';

function Row({name, closed, commit, forecast, likely}) {
  return (
    <div className="Row">
      <ul>
        <li className="Row-name">{name}</li>
        <li className="Row-closed">{closed}</li>
        <li className="Row-commit">{commit}</li>
        <li className="Row-forecast">{forecast}</li>
        <li className="Row-likely">{likely}</li>
      </ul>
    </div>
  )
}

class App extends Component {
  
  createRow(data) {
    return data.map((person, i) => {
      return <Row 
        name={person.name}
        closed={person.closed} 
        commit={person.commit}
        forecast={person.forecast}
        likely={person.likely}
        key={i}
        />
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>What is Your Team's Sales Forecast?</h2>
        </div>
        <div className="App-summary">
          <h2>Test</h2>
        </div>
        <div className="App-table">
            {this.createRow(data)}
        </div>
      </div>
    );
  }
}

export default App;
