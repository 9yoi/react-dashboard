import React, {Component} from 'react';
import {formatCurrency} from '../js/helpers.js';

// Field Component. Every table cell is a Field.
// Field id: salesperson + field key (e.g. John, commit)
export class Field extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.content,
      type: this.props.type,
      display: this.handleFormatting(this.props.content, this.props.type)
    } 
  }

  // if currency, format it. else return parameter as is.
  handleFormatting (content, type) {
    if (type === 'currency') {
      content =  formatCurrency(content);
    }
    return content;
  }

  handleClick (e) {
    console.log(e.target, 'e');
    console.log(e.target.value, 'e');
    console.log(e.target.getAttribute('value'));
    console.log(e, 'e');
  }

  render () {
    return (
      <div 
      className={`field ${this.state.type}`}
      onClick={this.handleClick}
      value={this.state.content}
      >
        {this.state.display} 
      </div>
    )
  }
} 

// Row Component. Extracts fields for rows based on header order
// fields: one row of data in object form -> {name: 'John', commit: '1000'}
export function Row ({fields, headers}) {
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
export function Summary ({name, value}) {
  return (
    <div className="summmary-part">
      <div className="summary-header">{name} </div>
      <div className="summary-value">{value} </div>
    </div>
  )
}