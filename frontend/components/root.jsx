import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const Root = ({store}) => {

  return (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  )
}

export default Root;