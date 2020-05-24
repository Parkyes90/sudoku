import React from 'react';
import ReactDOM from 'react-dom';
import { unregister } from 'core';
import { GlobalStyles } from './styles';
ReactDOM.render(
  <React.StrictMode>
    <>
      <GlobalStyles />
      <div>Hello world</div>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

unregister();
