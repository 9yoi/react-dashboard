import React, { Component } from 'react';
import './App.css';

function Field ({content, type = 'Currency' }) {
  return (
    <div className={`Field ${type}`}> {content} 
    </div>
  )
}

// function Row({name, closed, commit, forecast, likely}) {
//   return (
//     <div className="test">
//       <div className="Row-name">{name}</div>
//       <div className="Row-dollar">{closed}</div>
//       <div className="Row-dollar">{commit}</div>
//       <div className="Row-dollar">{forecast}</div>
//       <div className="Row-dollar">{likely}</div>
//     </div>
//   )
// }


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      headers: this.getHeaders(this.props.data[0])
    };    
  }

  //dynamically captures headers depending on input
  getHeaders (firstSet) {
    let headers = [];
    for (var columnName in firstSet) {
      headers.push(columnName);
    }
    return headers;
  }

  capitalize(s) {
    return s.slice(0,1).toUpperCase() + s.slice(1);
  }
  
  // creates one row with multiple fields
  // input: {Name: String, Commit: Number, Forecast: Number ...}
  createHeader(headers) {
    var fields = [];
    headers.forEach((header) => {
      return fields.push(<Field content={this.capitalize(header)} type='String'/>)
    });
    return fields;
  }

  // extracts content for rows based on header order
  // input: one row of data in object form -> {name: 'John', commit: '1000'}
  createRow(columns) {
    const keys = this.state.headers;
    let rows = [];
    keys.forEach((key) => {
      rows.push(<Field content={columns[key].content} type={columns[key].type}/>)
    })
    return rows;
  }

  // creates multiple rows
  // input: Array of salespeople data: [{name: 'name', content: ''}, {} ...]
  createRows(people) {
    let rows = [];
    people.forEach((person) => {
      rows.push(this.createRow(person));
    })
    return rows;
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
          <h1>What is Your Team's Sales Forecast?</h1>
        </div>
        <div className="App-summary">
          <h2>Test</h2>
        </div>
        <div className="App-table">
          <div className="Header">
            {this.createHeader(this.state.headers)}
          </div>
          <div className="Row">
            {this.createRows(this.state.data)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
