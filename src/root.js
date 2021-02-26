import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import reduxPromise from 'redux-promise';
import async from 'middlewares/async';
import reducers from 'reducers';

// create and export a functional React component
// it get props object

// So Root component allows to create a Provider tag with a redux store
// and on the fly we can swap out the component that is going to be placed inside the provider tag
// so we can use Provider tag (through Root) in index.js as wellas in testing file
export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers, 
    initialState, 
    // applyMiddleware(reduxPromise)
    applyMiddleware(async)
  );
  return (
    // <Provider store={createStore(reducers, {})} >
    <Provider store={store}>
      {children}
    </Provider>
  )
}



