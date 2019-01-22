import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const Root = ({store}) => {

  return (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  )
}

export default Root;