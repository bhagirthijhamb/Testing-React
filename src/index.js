import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
import reducers from 'reducers'; // list of reducers

import App from 'components/App';

ReactDOM.render(
  <Root>
    <App />
  </Root>, 
  document.querySelector('#root')
);