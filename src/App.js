import React, { Component } from 'react';
import './App.css';
import data from './data.js';

function Row (props) {
  console.log(props);
  return (
    <div className="Row">
      <ul>
        <li className="Row-name">{props.value.name}</li>
        <li className="Row-closed">{props.value.closed}</li>
        <li className="Row-commit">{props.value.commit}</li>
        <li className="Row-forecast">{props.value.forecast}</li>
        <li className="Row-likely">{props.value.likely}</li>
      </ul>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>What is Your Team's Sales Forecast?</h2>
        </div>
        <div className="App-summary">
          <h2> Test</h2>
        </div>
        <div className="App-table">
            <Row value={data[0]}/>
        </div>
      </div>
    );
  }
}

export default App;
