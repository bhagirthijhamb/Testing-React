import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from 'Root';

import App from 'components/App';

ReactDOM.render(
  // when our app first starts up, its goingt o render an instance of Root omponent
  // And App component will be passed to Root as child
  // Root receives App on the props property as props.children
  <Root>
    <BrowserRouter>
      {/* <App /> */}
      <Route path="/" component={App} />
    </BrowserRouter>
  </Root>, 
  document.querySelector('#root')
);