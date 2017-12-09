import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { entries } from '../data/entries';
import App from './components/App';
import "./styles/main.scss";

ReactDOM.render(
  <BrowserRouter>
    <App entries={entries} />
  </BrowserRouter>,
  document.getElementById('root'),
);
