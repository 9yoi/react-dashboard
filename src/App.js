import React, { Component } from 'react';
import './App.css';
import {formatCurrency, capitalize} from './helpers.js';

// Field Component. Every table cell is a Field.
function Field ({content, type = 'currency' }) {
  // if currency, format it. else return parameter as is.
  let output = '';
  if (type === 'currency') {
    output =  formatCurrency(content);
  } else {
    output = content;
  }

  return (
    <div className={`field ${type}`}> {output} </div>
  )
} 

// Row Component. Extracts fields for rows based on header order
// fields: one row of data in object form -> {name: 'John', commit: '1000'}
function Row ({fields, headers}) {
  const createRow = function (columns, headers){
    return headers.map((header) => {
      return <Field content={columns[header].content} type={columns[header].type}/>
    });
  }

  return (
    <div className="row">
      {createRow(fields, headers)}
    </div>
  )  
}

// Summary Component. Sums up row values to report team total
function Summary ({name, value}) {
  return (
    <div className="summmary-part">
      <div className="summary-header">{name} </div>
      <div className="summary-value">{value} </div>
    </div>
  )
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      headers: this.getHeaders(this.props.data[0]),
      summary: this.createSummary(this.props.data)
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
  
  // creates one row with multiple fields
  // input: {Name: String, Commit: Number, Forecast: Number ...}
  createHeader(headers) {
    var fields = [];
    headers.forEach((header) => {
      return fields.push(<Field content={capitalize(header)} type='string'/>)
    });
    return fields;
  }

  // creates multiple rows
  // input: Array of salespeople data: [{name: 'name', content: ''}, {} ...]
  createRows(people, headers) {
    let rows = [];
    people.forEach((person) => {
      rows.push(<Row fields={person} headers={headers}/>);
    })
    return rows;
  }

  //sums values up for team total
  createSummary (people) {
    let closed = 0;
    let commit = 0;
    let likely = 0;

    people.forEach((person) => {
      closed += person.closed.content;
      commit += person.commit.content;
      likely += person.likely.content;
    });

    return {
      closed: formatCurrency(closed),
      commit: formatCurrency(commit),
      likely: formatCurrency(likely)
    }
  }

  render() {       
    return (
      <div className="app">
        <div className="app-header">
          <h1>What is Your Team's Sales Forecast?</h1>
        </div>
        <div className="app-summary">
          <Summary name='Closed' value={this.state.summary.closed}/>
          <Summary name='Commit' value={this.state.summary.commit}/>
          <Summary name='Most Likely' value={this.state.summary.likely}/>
        </div>
        <div className="app-table">
          <div className="header row">
            {this.createHeader(this.state.headers)}
          </div>
          <div className="rows">
            {this.createRows(this.state.data, this.state.headers)} 
          </div>
        </div>
      </div>
    );
  }
}

export default App;
