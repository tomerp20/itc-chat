import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/general.css'
import Firebase from './utils/Firebase';
ReactDOM.render(
  <React.StrictMode>
    <Firebase>
      <App />
    </Firebase>
  </React.StrictMode>,
  document.getElementById('root')
);

