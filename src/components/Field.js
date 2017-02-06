import React from 'react';
import {formatCurrency} from '../js/helpers.js';

// Field Component. Every table cell is a Field.
export function Field ({content, type = 'currency' }) {
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