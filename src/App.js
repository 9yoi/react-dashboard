import React, { Component } from 'react';
import './App.css';
import data from './data.js';

function Row({name, closed, commit, forecast, likely}) {
  return (
    <div className="Row">
      <div className="Row-name">{name}</div>
      <div className="Row-dollar">{closed}</div>
      <div className="Row-dollar">{commit}</div>
      <div className="Row-dollar">{forecast}</div>
      <div className="Row-dollar">{likely}</div>
    </div>
  )
}

class App extends Component {
  
  createRow(data) {
    return data.map((person, i) => {
      return <Row 
        name={person.name}
        closed={this.formatCurrency(person.closed)} 
        commit={this.formatCurrency(person.commit)}
        forecast={this.formatCurrency(person.forecast)}
        likely={this.formatCurrency(person.likely)}
        key={i}
        />
    })
  }

  formatCurrency(amount) {
    let output = ''
    let str = String(amount);
    if(str.length <= 3) {
      return '$ ' + str;
    }
    let counter = 1;
    for (var i = str.length - 1; i >= 0; i--) {
      if (counter === 3 && i !==0) {
        output = ',' + str[i] + output;
        counter = 0;
      } else {
        output = str[i] + output;
        counter ++;
      }
    }
    return '$ ' + output;
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
