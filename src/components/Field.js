import React, {Component} from 'react';
import {formatCurrency} from '../js/helpers.js';
import data from '../js/data.js';

// Field Component. Every table cell is a Field.
// Field id: salesperson + field key (e.g. John, commit)
export class Field extends Component {
  
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleDisplay = this.toggleDisplay.bind(this);

    this.state = {
      salesperson: this.props.salesperson,
      field: this.props.field,
      content: this.props.content,
      type: this.props.type,
      display: this.handleFormatting(this.props.content, this.props.type),
      edit: false
    }
  }

  // if currency, format it. else return parameter as is.
  handleFormatting (content, type) {
    if (type === 'currency') {
      content =  formatCurrency(content);
    }
    return content;
  }

  toggleDisplay () {
    if (this.state.edit) {
      let formatted = this.handleFormatting(this.props.content, this.props.type);
      this.setState({display: formatted})
    } else {
      this.setState({display: this.state.content})
    }
    this.setState({edit: !this.state.edit})
  }

  handleChange (e) {
    this.setState({display: e.target.value});
  }

  handleSubmit (e) {
    console.log(`A change was submitted:${this.state.display}`);
    let update = this.state.display;
    let field = this.state.field;
    let salesperson = this.state.salesperson;

    // save into data. not optimal => look into new data structure.
    for (var i = 0; i < data.length; i++) {
      if (data[i].name.content === salesperson) {
        console.log('updating', update)
        data[i][field].content = update;
        break;
      }
    }
    this.toggleDisplay();
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        className={`field ${this.state.type}`}
        onFocus={this.toggleDisplay}
        onChange={this.handleChange}
        value={this.state.display}
        >
        </input>
      </form>
    )
  }
} 

// Row Component. Extracts fields for rows based on header order
// fields: one row of data in object form -> {name: 'John', commit: '1000'}
export function Row ({fields, headers}) {
  const createRow = function (columns, headers){
    return headers.map((header) => {
      return <Field 
        content={columns[header].content}
        type={columns[header].type}
        salesperson={fields.name.content}
        field={header}
        />
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