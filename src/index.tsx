import React from 'react';
import ReactDOM from 'react-dom';
import { unregister } from 'core';

ReactDOM.render(
  <React.StrictMode>
    <div> Hello world</div>
  </React.StrictMode>,
  document.getElementById('root')
);

unregister();
