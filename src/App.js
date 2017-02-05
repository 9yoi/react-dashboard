import React, { Component } from 'react';
import './App.css';

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

function Headers(props) {

  return (
    <div className="Row">
      <div className="Row-header">{props.fields[0]}</div>
      <div className="Row-header">{props.fields[1]}</div>
      <div className="Row-header">{props.fields[2]}</div>
      <div className="Row-header">{props.fields[3]}</div>
      <div className="Row-header">{props.fields[4]}</div>
    </div>
  )
}

class App extends Component {

  constructor (props) {
    super (props);
    this.state = {
      data: this.props.data,
      headers: ['Name', 'Closed', 'Commit', 'Forecast', 'Likely']
    };    
  }
  
  createHeaders (data) {
      return <Headers fields={data}/>;
  }

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
          <h1>What is Your Team's Sales Forecast?</h1>
        </div>
        <div className="App-summary">
          <h2>Test</h2>
        </div>
        <div className="App-table">
            {this.createHeaders(this.state.headers)}
            {this.createRow(this.state.data)}
        </div>
      </div>
    );
  }
}

export default App;
