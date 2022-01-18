import React from 'react';
import ReactDOM from 'react-dom';
import ContextProvider from './ContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider />
  </React.StrictMode>,
  document.getElementById('root')
);
