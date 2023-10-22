import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './App';
import { CssBaseline, Container } from '@mui/material';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <Container>
      <App />
    </Container>
  </Provider>,
  document.getElementById('root')
);
