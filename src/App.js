import React, { Component } from 'react';
import './App.css';


// Field Component. Every table cell is a Field.
function Field ({content, type = 'currency' }) {

  // helper function to format numbers into dollars
  const formatCurrency = function (amount) {
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

  // if currency, format it. else return parameter as is.
  let output = '';
  type === 'currency' ? output =  formatCurrency(content) : output = content;

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
      return fields.push(<Field content={this.capitalize(header)} type='string'/>)
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

  render() {       
    return (
      <div className="app">
        <div className="app-header">
          <h1>What is Your Team's Sales Forecast?</h1>
        </div>
        <div className="app-summary">
          <h2>Test</h2>
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
