import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import data from './js/data.js';
import './css/index.css';

ReactDOM.render(
  <App data={data}/>,
  document.getElementById('root')
);
